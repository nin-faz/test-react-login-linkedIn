import React from 'react';

interface TextInputProps {
  label: string;
  value: string;
  error?: string;
  type: string;
  isFocused: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  children?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  error,
  type,
  isFocused,
  onChange,
  onFocus,
  onBlur,
  children,
}) => {
  return (
    <div className="relative mb-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`w-full p-3 border rounded-md ${
          error ? 'border-red-600' : isFocused ? 'border-blue-500' : 'border-gray-500'
        }`}
      />
      <label
        htmlFor="password-input"
        className={`absolute left-3 transition-all ${
          isFocused || value ? 'top-0 text-xs text-gray-500' : 'top-3 text-gray-500'
        } ${error ? 'text-red-600' : ''}`}
      >
        {label}
      </label>
      {children}
      {error && <div className="text-red-600 text-sm font-semibold mb-4">{error}</div>}
    </div>
  );
};

export default TextInput;
