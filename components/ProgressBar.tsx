
import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full bg-gray-200 rounded-full h-6 mb-6 shadow-inner">
      <div
        className="bg-blue-600 h-6 rounded-full text-center text-white text-sm flex items-center justify-center transition-all duration-500"
        style={{ width: `${percentage}%` }}
      >
        {percentage > 10 ? `${percentage}%` : ''}
      </div>
    </div>
  );
};

export default ProgressBar;
