import React from 'react';

interface Button {
  id: number;
  label: string;
}

interface ButtonGroupProps {
  buttons: Button[];
  selectedButton: number;
  onButtonClick: (buttonId: number) => void;
}

function ButtonGroup({ buttons, selectedButton, onButtonClick }: ButtonGroupProps) {
  return (
    <div>
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => onButtonClick(button.id)}
          className={selectedButton === button.id ? 'active' : ''}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
