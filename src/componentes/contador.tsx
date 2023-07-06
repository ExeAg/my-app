import React, { useState } from 'react';


function Contador() {
    const [count, setCount] = useState<number>(0);
  
    const incrementar = () => {
      setCount(count + 1);
    };
  
    const decrementar = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <h2>Contador: {count}</h2>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    );
  }
  
export default Contador
