import React from 'react';

class CuentaBancaria {
  fondos: number;

  constructor() {
    this.fondos = 0;
  }

  asignarFondos(monto: number) {
    if (monto > 500000) {
      this.dispararAlarma("Asignación de fondos mayor a 500000");
    }

    this.fondos += monto;
  }

  sacarFondos(monto: number) {
    if (monto > this.fondos) {
      this.dispararAlarma("Intento de sacar más de lo que disponemos");
    }

    if (monto > 100000) {
      this.dispararAlarma("Intento de sacar más de 100000");
    }

    this.fondos -= monto;
  }

  dispararAlarma(mensaje: string) {
    alert("ALARMA: " + mensaje);
  }
}

const Banc: React.FC = () => {
  const cuenta = new CuentaBancaria();

  cuenta.asignarFondos(300000);
  cuenta.asignarFondos(600000);

  cuenta.sacarFondos(200000);
  cuenta.sacarFondos(150000);
  cuenta.sacarFondos(120000);

  return (
    <div>
      <h1>Cuenta Bancaria</h1>
      <p>Fondos disponibles: {cuenta.fondos}</p>
    </div>
  );
};

export default Banc;


