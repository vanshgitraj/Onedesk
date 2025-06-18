import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', disabled = false }) => {
  const baseStyles = 'px-4 py-2 rounded-lg text-sm font-medium transition-all';
  const primary = 'bg-blue-600 text-white hover:bg-blue-700';
  const ghost = 'bg-transparent border border-gray-300 text-black hover:bg-gray-100';
  const disabledStyle = 'opacity-50 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variant === 'primary' ? primary : ghost} ${disabled ? disabledStyle : ''}`}
    >
      {label}
    </button>
  );
};

export default Button;