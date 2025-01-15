import { CallStatus } from './call-interface';
import { Bot } from 'lucide-react';

export default function Header({ callStatus }: { callStatus: CallStatus }) {
  const getStatusDisplay = () => {
    switch (callStatus) {
      case 'processing':
        return {
          text: 'Processing',
          classes: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
        };
      case 'active':
        return {
          text: 'Active',
          classes: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        };
      case 'listening':
        return {
          text: 'Listening',
          classes: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
        };
      default:
        return {
          text: 'Idle',
          classes: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
        };
    }
  };

  const status = getStatusDisplay();

  return (
    <header className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Bot className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Smallest.ai Sales Agent
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Status:</span>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${status.classes}`}
          >
            {status.text}
          </span>
        </div>
      </div>
    </header>
  );
}