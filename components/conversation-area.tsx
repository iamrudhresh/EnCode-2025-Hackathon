import { Message } from './call-interface';

export default function ConversationArea({
  messages,
}: {
  messages: Message[];
}) {
  return (
    <div className="h-[500px] overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === 'agent' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg p-3 ${
              message.sender === 'agent'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
            }`}
          >
            <p>{message.text}</p>
            <p
              className={`text-xs mt-1 ${
                message.sender === 'agent'
                  ? 'text-blue-100'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {message.timestamp.toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}
      {messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500 dark:text-gray-400">
            No messages yet. Start a call to begin the conversation.
          </p>
        </div>
      )}
    </div>
  );
}