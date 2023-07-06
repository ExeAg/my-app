import { useEffect, useState } from "react";
export const EjeEffect = () =>{
    const [suma, setSuma] = useState(0);

    useEffect(()=>{
        console.log("se renderizo el use Effect ${suma}");
    },[suma]);
    
    return(
        <>
            <h2>Suma {suma}</h2>
            <button
                onClick={()=>setSuma(suma+1)}>
                sumar
            </button>
        </>
    )

};
