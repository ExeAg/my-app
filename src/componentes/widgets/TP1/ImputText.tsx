import React, { ChangeEvent } from 'react';

interface InputTextProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({ label, value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default InputText;
