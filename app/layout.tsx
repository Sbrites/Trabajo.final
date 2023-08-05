import CardInfo from './componentes/CardInfo'
import Footer from './componentes/Footer'
import Nav from './componentes/Nav'
import './globals.css'
import { Space_Grotesk} from 'next/font/google'
import Evergren from './icons/Evergren'
import Image from 'next/image'

const space_Grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Evergreen',
  description: 'Practicando NextJS en el curso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={space_Grotesk.className}>
        <div className='Title'>
        <Evergren /> 
        </div>
        <div className='contenedor'>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
