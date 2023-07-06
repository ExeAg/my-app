import React from 'react';

interface SaludoProps {
  saludo: string;
}

const Saludo: React.FC<SaludoProps> = ({ saludo }) => {
  return <h1>Hola, {saludo}!</h1>;
};

export default Saludo;