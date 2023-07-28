import exp from 'constants'
import styles from './page.module.css'
import SearchIcon from './icons/SearchIcons'



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <>
          <form className="icono">
              <span>
                <SearchIcon />
              </span>
              <input  className="buscador" type="text" placeholder="Search"/>
              <button className="boton">Buscar</button>
          </form>
          <article>
            Todo el chamullo 
          </article>
        
        
        </>

      </div>
    </main>
  )
}

