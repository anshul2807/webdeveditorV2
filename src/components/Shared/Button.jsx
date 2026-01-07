import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
    outline: 'border border-gray-600 hover:bg-gray-800 text-gray-300',
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;