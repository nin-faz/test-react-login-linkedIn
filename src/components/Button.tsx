import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 rounded-full font-semibold transition duration-300 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
