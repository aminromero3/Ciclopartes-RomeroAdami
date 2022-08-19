import React from 'react'

function Page(props) {
    return (
        <div>  
            <h2>{props.titulo}</h2>
            <h3>{props.ubtitulo}</h3>
            <div className='contenido'>
                {props.children}
            </div>
        </div>
    )
}

export default Page