import { create } from 'zustand';
import { Message } from '@/components/call-interface';

interface CallState {
  callStatus: 'idle' | 'active' | 'listening';
  isListening: boolean;
  messages: Message[];
  currentCall: {
    id: string;
    startTime: Date;
    customer: {
      id: string;
      name: string;
      company: string;
      position: string;
      industry: string;
    } | null;
  } | null;
  setCallStatus: (status: 'idle' | 'active' | 'listening') => void;
  setIsListening: (isListening: boolean) => void;
  addMessage: (message: Message) => void;
  startCall: (customerId: string) => void;
  endCall: () => void;
}

export const useCallStore = create<CallState>((set) => ({
  callStatus: 'idle',
  isListening: false,
  messages: [],
  currentCall: null,
  setCallStatus: (status) => set({ callStatus: status }),
  setIsListening: (isListening) => set({ isListening }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  startCall: (customerId) =>
    set({
      currentCall: {
        id: Date.now().toString(),
        startTime: new Date(),
        customer: {
          id: customerId,
          name: 'John Smith',
          company: 'Tech Innovations Inc.',
          position: 'Chief Technology Officer',
          industry: 'Software & Technology',
        },
      },
      callStatus: 'active',
    }),
  endCall: () =>
    set({
      currentCall: null,
      callStatus: 'idle',
      isListening: false,
      messages: [],
    }),
}));