import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { EjeEffect } from './componentes/widgets/TP1/EjeUseEffect';
import EjeReducer from './componentes/widgets/TP1/EjeReducer';
import CheckBox from './componentes/widgets/TP1/CheckBox';
import RadioButton from './componentes/widgets/TP1/RadioButton';
import ButtonGroup from './componentes/widgets/TP1/ButtonGroup';
import Dropdown from './componentes/widgets/TP1/dropdown';
import InputDate from './componentes/widgets/TP1/ImputDate';
import InputSlider from './componentes/widgets/TP1/ImputSlider';
import InputTextarea from './componentes/widgets/TP1/ImputTextarea';
import InputText from './componentes/widgets/TP1/ImputText';
import Aut from './componentes/widgets/tp2/autos';
import Alum from './componentes/widgets/tp2/escuela';
import Banc from './componentes/widgets/tp2/Banco';
import Saludo from './componentes/widgets/TP3/tp3Saludo';
import Usuario from './componentes/widgets/TP3/tp3Usuario';
import LoguiarForm from './componentes/widgets/TP3/tp3Formulario';
import Reloj from './componentes/widgets/TP3/tp3Reloj';
import Gallery from './componentes/widgets/TP3/tp3GaleriaImagen';


function App() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId: number) => {
    setSelectedButton(buttonId);
  };

  const buttons = [
    { id: 1, label: 'Opción 1' },
    { id: 2, label: 'Opción 2' },
    { id: 3, label: 'Opción 3' },
  ];
  
   
  return (
    <div>
      <EjeEffect/>
      <EjeReducer/>
      <h2><center>Usted es?</center></h2>
      <center><CheckBox label="Hombre"/><CheckBox label="Mujer"/></center>
      
      <h2>Radio Button</h2>
      <RadioButton />
      <ButtonGroup
        buttons={buttons}
        selectedButton={selectedButton}
        onButtonClick={handleButtonClick}
      />
      <h2>Mi Aplicación</h2>
      <Dropdown />
      <h2>Selecciona una fecha:</h2>
      <InputDate />
      <h2>Valora esta App</h2>
      <InputSlider />
      <h2>Coloque Alguna Observación</h2>
      <InputTextarea />
      <Aut/>
      <Alum/>
      <Banc/>
      <Saludo saludo='Buenos Días'/>
      <Usuario nombre='Kevin' edad='58' telefono='2615994456' domicilio='Calle falsa 123'/>
      <LoguiarForm/>
      <Reloj/>
      <Gallery/>
    </div>
    
  );
}; 



export default App;