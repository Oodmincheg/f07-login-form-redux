import React from 'react';

export default function Input({
  labelText,
  type = 'text',
  placeholder,
  name,
  value,
  onChange,
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
    </div>
  );
}
