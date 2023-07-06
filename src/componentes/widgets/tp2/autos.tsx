import React from 'react';

interface AutoProps {
  marca: string;
  modelo: string;
  potencia: number;
  maxVelocidad: number;
}

class Auto {
  marca: string;
  modelo: string;
  potencia: number;
  maxVelocidad: number;

  constructor(marca: string, modelo: string, potencia: number, maxVelocidad: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.maxVelocidad = maxVelocidad;
  }

  calcularTiempo(distancia: number): number {
    const tiempo = distancia / this.maxVelocidad;
    return tiempo;
  }
}

const Aut: React.FC = () => {
  
  const autos: Auto[] = [
    new Auto("Toyota", "Corolla", 150, 200),
    new Auto("Ford", "Mustang", 300, 250),
    new Auto("Chevrolet", "Camaro", 280, 240),
    new Auto("Honda", "Civic", 120, 180),
    new Auto("BMW", "X5", 200, 220),
  ];

  return (
    <div>
      <h1>Lista de Autos</h1>
      
      {autos.map((auto, index) => (
        <div key={index}>
          <h1>Auto</h1>
          <p>Marca: {auto.marca}</p>
          <p>Modelo: {auto.modelo}</p>
          <p>Potencia: {auto.potencia}</p>
          <p>Velocidad Máxima: {auto.maxVelocidad}</p>
          
        </div>
      ))}

      
      <h2>Tiempo para recorrer 500 km:</h2>
      {autos.map((auto, index) => (
        <div key={index}>
          <p>
            El auto {auto.marca} {auto.modelo} tarda {auto.calcularTiempo(500).toFixed(2)} horas en recorrer 500 km.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Aut;


