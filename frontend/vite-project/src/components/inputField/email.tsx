import React from 'react';

const Email: React.FC = () => {
  return (
    <div>
      <label htmlFor="hs-leading-icon" className="block text-sm font-medium mb-2 text-gray-700 dark:text-white">
        Email address
      </label>
      <div className="relative">
        <input
          type="text"
          id="hs-leading-icon"
          name="hs-leading-icon"
          className="py-3 px-4 pr-10 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="you@site.com"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none z-20">
          <svg
            className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM10 18a9.95 9.95 0 006.186-2.1.5.5 0 11.614.788A11.932 11.932 0 0120 10c0 6.627-5.373 12-12 12a11.943 11.943 0 01-7.073-2.328.5.5 0 11.614-.788A9.95 9.95 0 0010 18z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Email;
