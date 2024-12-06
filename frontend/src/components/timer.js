import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white text-gray-800 px-6 py-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6 text-gray-600" />
          </div>
          <span
            className={`text-6xl font-bold ${
              timeRemaining <= 15 ? 'text-red-500' : 'text-gray-800'
            }`}
          >
            {timeRemaining.toLocaleString('en-US', { minimumIntegerDigits: 2 })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;