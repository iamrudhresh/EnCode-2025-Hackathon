export async function textToSpeech(text: string): Promise<ArrayBuffer> {
  const response = await fetch('/api/tts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error('TTS request failed');
  }

  return response.arrayBuffer();
}

export function startSpeechRecognition(
  onResult: (text: string) => void,
  onError: (error: Error) => void,
) {
  if (!('webkitSpeechRecognition' in window)) {
    onError(new Error('Speech recognition not supported'));
    return null;
  }

  const recognition = new (window as any).webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event: any) => {
    const result = event.results[event.results.length - 1];
    if (result.isFinal) {
      onResult(result[0].transcript);
    }
  };

  recognition.onerror = (event: any) => {
    onError(new Error(event.error));
  };

  recognition.start();
  return recognition;
}