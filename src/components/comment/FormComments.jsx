import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const FormComments = ({ ciudad }) => {
    // NOTE: Esto despues de cambiaria para consumir datos de una base de datos
    const [comentarios, setComentarios] = useState(() => {
        const savedComments = localStorage.getItem('comentarios')
        return savedComments ? JSON.parse(savedComments) : []
    })

    const [comentario, setComentario] = useState('')
    const city = ciudad[0]

    useEffect(() => {
        localStorage.setItem('comentarios', JSON.stringify(comentarios))
    }, [comentarios])

    const handleSubmit = e => {
        e.preventDefault()
        if (comentario.trim().length >= 3) {
            const newComment = { id: comentarios.length, comentario }
            const updatedComentarios = [...comentarios, newComment]
            setComentarios(updatedComentarios)
            setComentario('')
        }

        // Borra los comentarios cuando se introdujeron 5
        if (comentarios.length >= 5) handleClearComments()
    }

    // Para borrar los comentarios en memoria
    const handleClearComments = () => {
        setComentarios([])
        localStorage.removeItem('comentarios')
    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comentario">
                    <p>¿Quieres agregar un comentario de la ciudad?</p>
                    <input
                        type="text"
                        name="comentario"
                        id="comentario"
                        placeholder="Escribe tu comentario aqui..."
                        value={comentario}
                        onChange={e => setComentario(e.target.value)}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
            <ul>
                {city.comentarios.map(comentario => (
                    <li key={comentario.id}>{comentario.comentario}</li>
                ))}
                {comentarios.map(c => (
                    <li key={c.id}>{c.comentario}</li>
                ))}
            </ul>
        </article>
    )
}

FormComments.propTypes = {
    ciudad: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FormComments
