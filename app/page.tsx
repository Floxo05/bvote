import React from 'react';

const Home = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md w-full mx-4 md:mx-0">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Abstimmung {"id"}</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Hier kannst du für deine Favoriten abstimmen.
          </p>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Option 1
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
              Option 2
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
              Option 3
            </button>
          </div>
        </div>
      </div>
  );
};

export default Home;

