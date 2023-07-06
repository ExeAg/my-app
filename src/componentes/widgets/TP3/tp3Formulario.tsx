import React, { useState } from 'react';

const LoguiarForm = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Usuario: ${nombreUsuario}\nContraseña: ${contraseña}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreUsuario">Usuario:</label>
        <input
          type="text"
          id="nombreUsuario"
          value={nombreUsuario}
          onChange={(event) => setNombreUsuario(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="contraseña"
          id="contraseña"
          value={contraseña}
          onChange={(event) => setContraseña(event.target.value)}
        />
      </div>
      <button type="submit">ingresar</button>
    </form>
  );
};

export default LoguiarForm;