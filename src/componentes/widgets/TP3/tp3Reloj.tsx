import React, { useState, useEffect } from 'react';

const Reloj: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Limpia el horario en el que se usaba anteriormente, para evitar errores
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    const horas = date.getHours().toString().padStart(2, '0');
    const minutos = date.getMinutes().toString().padStart(2, '0');
    const segundos = date.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  };

  return (
    <div>
      <h2>Reloj</h2>
      <p>{formatTime(currentTime)}</p>
    </div>
  );
};

export default Reloj;