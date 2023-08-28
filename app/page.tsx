import React from 'react';

const Home = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md w-full mx-4 md:mx-0">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Willkommen zur Abstimmungsseite!</h1>
          <p className="text-gray-700 dark:text-gray-300">
            Diese Funktionen stehen nur über einen persönlichen Link zur Verfügung. Bitte verwende den bereitgestellten Link, um auf die Abstimmungsseite zuzugreifen.
          </p>
        </div>
      </div>
  );
};

export default Home;

