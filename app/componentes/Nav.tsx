import Link from 'next/link';
// Este es un import de un CSS clásico
import './nav.css';

export default function Nav () {
    return (
        <nav className='nav'>
            <ul className='nav-lista'>
                <li className='nav-item'>
                    <Link href='./'>Inicio</Link>
                </li>
                <li className='nav-item'>
                    <Link href='/servicios'>Donaciones</Link>
                </li>
                <li className='nav-item'>
                    <Link href='/contacto'>Contacto</Link>
                </li>
                <li className='nav-item'>
                    <Link href='/informacion'>Quienes Somos</Link>
                </li>
            </ul>
        </nav>
    )
}
