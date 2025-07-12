import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 text-white">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100 animate-fade-in">
          Welcome to Sagar's Portfolio
        </h1>
        
        <div className="w-16 h-16 sm:w-20 sm:h-20 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        
        <p className="text-base sm:text-lg font-medium text-gray-400 animate-fade-in delay-300">
          Loading your experience...
        </p>
      </div>
    </div>
  );
};

export default Loader;
