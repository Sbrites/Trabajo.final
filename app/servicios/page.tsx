
// No uses SSR, renderiza en el cliente
// Los hooks necesitan client-side rendering
'use client';
import './donaciones.css'
// No funciona en SSR
import { useState } from "react";

export default function Donaciones () {
    
    const [number, setNumber] = useState(100);


    return (
        <>
            <h1 className='donacion'>hacete socio</h1>

                <div>
                    <h1 className='introducion'>
                        <p>Nuestros socios y socias son personas que decidieron comprometerse y comenzar a  hacer algo a favor de nuestros recursos naturales. Gracias a ellos podemos seguir trabajando en nuestro país como lo venimos haciendo desde nuestra fundación en 1977.</p>
                        <p>Estamos convencidos de que nuestros logros en todo este tiempo sólo pueden hacerse con el apoyo de la comunidad, ya que no podemos hacerlo solos. Por eso, hoy te pedimos que te asocies a Evergreen. Tu aporte hace una diferencia enorme para poder seguir trabajando en la conservación de nuestra naturaleza. Sé parte de Evergren .</p>
                    
                    </h1>
                </div>
                <div>
                    <h1>
                        cuanto queres donar? 
                    </h1>
                </div>
            <p > {number}</p>
            <button className='boton' onClick={() => {setNumber(number + 100)}}>
                Donar
            </button>
        </>
    )
}
