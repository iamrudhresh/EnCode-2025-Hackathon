'use client';

import { useState } from 'react';
import { Phone, PhoneOff, Mic, MicOff, Send } from 'lucide-react';
import Header from './header';
import CustomerInfo from './customer-info';
import ConversationArea from './conversation-area';
import { ttsService } from '@/services/tts';
import { speechRecognitionService } from '@/services/speech-recognition';
import { conversationService } from '@/services/conversation';

export type CallStatus = 'idle' | 'active' | 'listening' | 'processing';
export type Message = {
  id: string;
  text: string;
  sender: 'agent' | 'customer';
  timestamp: Date;
};

export default function CallInterface() {
  const [callStatus, setCallStatus] = useState<CallStatus>('idle');
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleStartCall = async () => {
    setCallStatus('processing');
    setIsProcessing(true);
    const initialMessage = "Hi, this is Alex from Smallest.ai. I noticed your company's impressive growth in the tech sector. I'd love to discuss how our Lightning AI model could enhance your customer service operations.";
    
    const message: Message = {
      id: Date.now().toString(),
      text: initialMessage,
      sender: 'agent',
      timestamp: new Date(),
    };
    
    setMessages([message]);
    await ttsService.speak(initialMessage);
    setCallStatus('active');
    setIsProcessing(false);
  };

  const handleEndCall = () => {
    if (isListening) {
      speechRecognitionService.stopListening();
      setIsListening(false);
    }
    setCallStatus('idle');
    setMessages([]);
    setIsProcessing(false);
    conversationService.reset();
  };

  const toggleListening = () => {
    if (isProcessing) return;

    if (isListening) {
      speechRecognitionService.stopListening();
      setIsListening(false);
      setCallStatus('active');
    } else {
      speechRecognitionService.startListening(async (text) => {
        await handleUserInput(text);
      });
      setIsListening(true);
      setCallStatus('listening');
    }
  };

  const handleUserInput = async (text: string = inputMessage) => {
    if (!text.trim() || isProcessing) return;

    setIsProcessing(true);
    setCallStatus('processing');
    
    if (isListening) {
      speechRecognitionService.stopListening();
      setIsListening(false);
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'customer',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');

    try {
      const response = await conversationService.getResponse(text);
      if (response) {
        const agentMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response,
          sender: 'agent',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, agentMessage]);
        await ttsService.speak(response);
      }
    } catch (error) {
      console.error('Error processing response:', error);
    } finally {
      setIsProcessing(false);
      setCallStatus('active');
    }
  };

  const isInputDisabled = callStatus === 'idle' || isProcessing;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Header callStatus={callStatus} />
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <CustomerInfo />
        </div>
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <ConversationArea messages={messages} />
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <button
                  onClick={callStatus === 'idle' ? handleStartCall : handleEndCall}
                  disabled={isProcessing}
                  className={`p-2 rounded-full ${
                    callStatus === 'idle'
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-red-500 hover:bg-red-600'
                  } text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {callStatus === 'idle' ? (
                    <Phone className="w-5 h-5" />
                  ) : (
                    <PhoneOff className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={toggleListening}
                  disabled={isInputDisabled}
                  className={`p-2 rounded-full ${
                    isListening
                      ? 'bg-blue-500 hover:bg-blue-600'
                      : 'bg-gray-500 hover:bg-gray-600'
                  } text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isListening ? (
                    <Mic className="w-5 h-5" />
                  ) : (
                    <MicOff className="w-5 h-5" />
                  )}
                </button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={isProcessing ? "AI is responding..." : "Type your message..."}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isInputDisabled}
                />
                <button
                  onClick={() => handleUserInput()}
                  disabled={isInputDisabled || !inputMessage.trim()}
                  className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {isProcessing && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  AI is processing your request...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}