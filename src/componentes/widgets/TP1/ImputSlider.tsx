import React, { useState } from 'react';

function InputSlider() {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={value}
        onChange={handleSliderChange}
      />
      <p>Value: {value}</p>
    </div>
  );
}

export default InputSlider;

