import React, { useState, ChangeEvent } from 'react';

function InputTextarea() {
  const [value, setValue] = useState('');

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <textarea
        value={value}
        onChange={handleTextareaChange}
      />
      <p>Value: {value}</p>
    </div>
  );
}

export default InputTextarea;
