import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
    <div className='content'>
        <div className='info'>
            <h1>Fundación el Rous</h1>
            <p>
                Buscamos proteger la vida de perros y gatos en estado de 
                maltrato y abandono. Les brindamos alimentos, medicamentos y albergue, 
                con el fin de mejorar su calidad de vida y conseguirles un hogar.
            </p>
            <button><Link to='/adopta'>Adopta un Amigo</Link></button>
        </div>
    </div>
    )
}

export default Banner