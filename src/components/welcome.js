import { useState, useEffect } from "react";

export default function Welcome(props) {
    // console.log(props);
    //al declarar una constante con el useState, la primera variable debe ir con mayúscula
    //y la segunda debe empezar con un set y llevar el nombre de la primera después del set
    const [counter, setCounter] = useState(0);
    const [semaforo, setSemaforo] = useState(false);
    const {message, name} = props;


    const contar = ()=>{
        setCounter(counter+1);
        setSemaforo(!semaforo);
    };
    return (
        <div>
            <p>Hola {name}</p>
            <p>{message}</p>
            <h2>Contador de React</h2>
            <h4> El número del contador es {counter}</h4>
            <h4> El estado del semaforo es {semaforo ? "red": "green"}</h4>
            <button type="submit" onClick={contar}>Sumar contador</button>
        </div>
    );
}