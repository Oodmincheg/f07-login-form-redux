import React from 'react';

const errorStyle = { color: 'red' };

export default function Input({
  labelText,
  type = 'text',
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error ? <div style={errorStyle}>{error}</div> : null}
    </div>
  );
}
