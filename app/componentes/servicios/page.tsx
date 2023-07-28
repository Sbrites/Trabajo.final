// No uses SSR, renderiza en el cliente
// Los hooks necesitan client-side rendering
'use client';

// No funciona en SSR
import { useState } from "react";

export default function Servicios () {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>Estás en servicios</h1>
            <p>Por ahora vamos: {number}</p>
            <button onClick={() => {setNumber(number + 1)}}>
                Sumar 1 al número
            </button>
        </>
    )
}
