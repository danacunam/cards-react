import { useState } from 'react'

export const Contador = ({inicial, factor}) => {
   
    const [contador, setContador] = useState(inicial)
  
    const aumentar = () => {
  
         // setContador(contador + 1)
        setContador ((actual) => actual + factor)
    }
    const dim = () => {
        setContador(contador - factor)
    }
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <hr />
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={dim}>Disminuir</button>
        </div>
    )
}
