import './contacto.css'

export default function Contacto () {
    return (
        <>
            <h1 className='descripcion'>
                    Ciudad Autónoma de Buenos Aires
                    Defensa 251, piso 6to K C1065AAC
                    Ciudad Autónoma de Buenos Aires, Argentina.
                    Tel/Fax: +54 11 4343-4086
i           </h1>   nfo@Evergreen.org.ar 

                <p>
                Por consultas para el área de socios contactarse por favor con Evergren@conciencia.org.ar
                </p>

            {/*
                Action: Dirección de a dónde va el form
                    Archivo que procesa el formulario
                
                Method: POST / GET (default)
                    GET: Ideal para búsquedas y algunas APIs (PokeApi)
                    POST: formularios de contacto, autenticación, registro de usuarios

            */}

            {/* Acá duplico mi form para Netlify */}
            {/* El action me hace un redirect a la página de gracias */}
            <form action="./contacto/gracias" name="contacto" data-netlify="true" netlify-honeypot="bot-field" hidden>
                <input type="text" name="nombre" />
                <input type="email" name="email" />
                <textarea name="comentario" ></textarea>
            </form>

            <form method="post" className='formulario'>

                {/* Identificamos cada campo con un atributo name */}

                <label>

                    Nombre:

                    <input type="text" name="nombre" />

                </label>

                <label>

                    Mail:

                    <input type="email" name="email" />

                </label>

                <label>

                    Comentarios:

                    <textarea name="comentario" ></textarea>

                </label>

 

                <input type="hidden" name="form-name" value="contacto" />

 

                {/* <input type="submit" value="Enviar" /> */}

                <button className='boton' type="submit">Enviar</button>

            </form>
        </>
    )
}
