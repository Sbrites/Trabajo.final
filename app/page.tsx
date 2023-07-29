import exp from 'constants'
import styles from './page.module.css'
import SearchIcon from './componentes/icons/SearchIcons'
import CardInfo from './componentes/CardInfo'
import Evervgren from './componentes/icons/Evergren'
import Image from 'next/image'
import condor from './assets/image/condor.jpg'
import pinguino from './assets/image/pinguino.jpg'
import ballena from './assets/image/ballena.jpg'
import ciervo from './assets/image/ciervo.jpg'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <>
          <form className='Icono'>

              <input  className="buscador" type="text" placeholder="Search"/>
              <button className="boton">Buscar</button>
          </form>
        </>

      </div>
        <article className='descripcion'/>
        <div>
        Las acciones humanas han alterado significativamente la naturaleza en todo el mundo. Alrededor de 1 millón de especies animales y vegetales están en peligro de extinción. Y ese es un tema que deberíamos tener muy en cuenta cuando se celebra el Día del Animal este 19 de abril en nuestro territorio.
        Con un pasado centenario de defensa de los animales recordemos que que Ignacio Albarracín fue el gran impulsor de la Ley Nacional de Protección de Animales N° 2.786 que se promulgó el 25 de julio de 1891), Argentina es uno de los países del planeta con mayor biodiversidad, y no es la excepción entre las naciones que tienen muchos animales con riesgo de desaparecer por distintos motivos.
        Según la Fundación de Vida Silvestre Argentina FVSA hoy suman más de 500 las especies amenazadas en nuestro país. Pero ¿cuáles son los animales en peligro de extinción en Argentina? Te contamos algunas de esas especies más emblemáticas de nuestro territorio.
        </div>
      <div>
        <article className='Card'>
            <CardInfo />
              <div className='Card'>
                  <div>
                      <Image src={pinguino} />
                  </div>
                PINGÜINO DE MAGALLANES
                    <p>
                    Un animal hermoso, típico del sur argentino.A lo largo de la costa de la Patagonia argentina hay varias colonias donde se los puede ver en su hábitat natural. En Punta Tombo, Chubut, está la mayor reserva continental. Pero es una especie amenazada por la contaminación de los mares por la extracción del petróleo y por la pesca indiscriminada. Las hembras están subiendo peligrosamente más al norte de la Patagonia para parir, alejándose de los machos. Lo que aumenta su riesgo de supervivencia.
                     </p>
              </div>
        </article>
        <article className='Card'>
            <CardInfo />
                  <div>
                      <Image src={ciervo} />
                  </div>
                <div>
                  CIERVO DE LOS PANTANOS
                    <p>
                    El Blastocerus dichotomus o ciervo de los pantanos, es el tipo de ciervo más grande de Sudamérica: llega a 2 metros de largo y 1,20 de alto. Habita en los Esteros del Iberá, Corrientes. En las cuencas de los ríos Paraná y Paraguay, en la zona amazónica de Perú y en regiones de Bolivia. La caza indiscriminada, así como los cambios ambientales impulsados por la cría de ganado, redujeron notablemente su población.
                    </p>
                </div>
        </article>
        <article className='Card'>
            <CardInfo />
                  <div>
                      <Image src={ballena} />
                  </div>
              <div>
                BALLENA FRANCA AUSTRAL
                  <p>
                  Es el mamífero más grande de la Argentina, donde se la puede ver en la costa de Puerto Madryn todos los años, de septiembre a diciembre, cuando llegan a esa zona para aparearse. La caza indiscriminada la asoló desde el siglo XIX. Su población original se redujo hasta en un 90 por ciento. Los científicos de la fauna marina creen que hoy solo quedan en el mundo 3000 ejemplares en todo el mundo, de los cuales el 20 por ciento está en el mar argentino. Animal imponente que mide 15 metros y pesa 47 mil kilos (47 toneladas), y se puede avistar silenciosamente en botes que se le acercan en el sur argentino.
                  </p>
              </div>
        </article>
        <article className='Card'>

            <CardInfo />
            <div>
                      <Image src={condor} />
                  </div>
              <div>
                CÓNDOR ANDINO
                  <p>
                  Habita las cumbres de los Andes Sudamericanos e incluso la costa atlántica de Patagonia, donde estuvo extinto por más de un siglo. Como carroñero, limpia el ambiente de focos de infección. El envenenamiento, por uso ilegal de cebos tóxicos en ganadería, ocasiona muertes masivas de esta emblemática especie.
                  </p>
              </div>
        </article>

      </div>
    </main>
  )
}

