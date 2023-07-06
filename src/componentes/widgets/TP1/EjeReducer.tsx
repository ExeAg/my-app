import {useReducer} from "react";

interface State {
    count: number;
};

type Action = {type: "SUMAR"} | {type : "RESTAR"};

const reducer = (state: State, action: Action): State =>{
    switch(action.type) {
        case "SUMAR":
            return {count: state.count +1};
        case "RESTAR":
            return {count: state.count -1};
        default:
            return state;
    };
};

const EjeReducer: React.FC = () =>{
    //estado inicial
    const initialState: State = {count: 0};
    //usamos reducer
    const [state, dispach] = useReducer(reducer, initialState);
    
    return (
        <div>
            <p>contar: {state.count}</p>
            <button onClick={()=>dispach({type: "SUMAR"})}>+</button>    
        </div>

    ) 
    
}
export default EjeReducer