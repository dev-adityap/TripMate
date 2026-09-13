import React from 'react';

const Input = ({
  label,
  type = 'text',
  id,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-textPrimary">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`
          w-full px-4 py-2.5 rounded-xl border bg-surface text-textPrimary text-sm
          transition-all duration-200 outline-none
          placeholder:text-gray-400
          focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
          ${error ? 'border-danger focus:border-danger focus:ring-danger/20' : 'border-gray-200'}
        `}
        {...props}
      />
      {error && (
        <span className="text-xs text-danger mt-0.5">{error}</span>
      )}
    </div>
  );
};

export default Input;