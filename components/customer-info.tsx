'use client';

import { Building2, User, Briefcase, LineChart } from 'lucide-react';

export default function CustomerInfo() {
  // This would be populated with real customer data from your CRM
  const customerData = {
    name: 'John Smith',
    company: 'Tech Innovations Inc.',
    position: 'Chief Technology Officer',
    industry: 'Software & Technology',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Customer Information
      </h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
            <p className="text-gray-900 dark:text-white">{customerData.name}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Building2 className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Company</p>
            <p className="text-gray-900 dark:text-white">{customerData.company}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Briefcase className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Position</p>
            <p className="text-gray-900 dark:text-white">
              {customerData.position}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <LineChart className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Industry</p>
            <p className="text-gray-900 dark:text-white">
              {customerData.industry}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}