import React from 'react';

interface AlumnoProps {
  nombre: string;
  edad: number;
}

class Alumno {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

interface CursoProps {
  nombre: string;
  alumnos: Alumno[];
}

class Curso {
  nombre: string;
  alumnos: Alumno[];

  constructor(nombre: string, alumnos: Alumno[]) {
    this.nombre = nombre;
    this.alumnos = alumnos;
  }
}

class Escuela {
  cursos: Curso[];

  constructor() {
    this.cursos = [];
  }

  agregarCurso(curso: Curso) {
    this.cursos.push(curso);
  }
}

const Alum: React.FC = () => {
  const escuela = new Escuela();

  // Crear curso 1 con alumnos
  const alumnosCurso1: Alumno[] = [
    new Alumno("Juan", 15),
    new Alumno("María", 16),
    new Alumno("Pedro", 17),
  ];
  const curso1 = new Curso("Matemáticas", alumnosCurso1);
  escuela.agregarCurso(curso1);

  // Crear curso 2 con alumnos
  const alumnosCurso2: Alumno[] = [
    new Alumno("Ana", 14),
    new Alumno("Luis", 16),
  ];
  const curso2 = new Curso("Historia", alumnosCurso2);
  escuela.agregarCurso(curso2);

  return (
    <div>
      <h1>Escuela</h1>
      {escuela.cursos.map((curso, index) => (
        <div key={index}>
          <h2>Curso: {curso.nombre}</h2>
          <h3>Alumnos:</h3>
          <ul>
            {curso.alumnos.map((alumno, index) => (
              <li key={index}>{alumno.nombre} (Edad: {alumno.edad})</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Alum;
