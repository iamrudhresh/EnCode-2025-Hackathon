'use client';

class TTSService {
  private synthesis: SpeechSynthesis | null = null;
  private voice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.synthesis = window.speechSynthesis;
      this.setVoice();
      window.speechSynthesis.onvoiceschanged = () => {
        this.setVoice();
      };
    }
  }

  private setVoice() {
    if (!this.synthesis) return;
    const voices = this.synthesis.getVoices();
    // Try to get a female English voice
    this.voice = voices.find(voice => 
      voice.lang.includes('en') && voice.name.includes('Female')
    ) || voices[0];
  }

  async speak(text: string): Promise<void> {
    return new Promise((resolve) => {
      if (!this.synthesis || !this.voice) {
        console.error('Speech synthesis not supported');
        resolve();
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = this.voice;
      utterance.rate = 1;
      utterance.pitch = 1;

      utterance.onend = () => {
        resolve();
      };

      this.synthesis.speak(utterance);
    });
  }
}

export const ttsService = new TTSService();