import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Abrir Dropdown</button>
      {isOpen && (
        <div>
          <p>Opción 1</p>
          <p>Opción 2</p>
          <p>Opción 3</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
