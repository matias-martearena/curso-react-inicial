import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const FormComments = ({ ciudad }) => {
    const [comentario, setComentario] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = data => {
        console.log(data) // TODO: quitar esto si es que funciona
        ciudad.comentarios.push({ id: ciudad.comentarios.length + 1, comentario: data })
    }

    return (
        <article>
            <p>¿Quieres agregar un comentario de la cuidad?</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="comentario">
                    Comentario:{' '}
                    <textarea
                        name="comentario"
                        id="comentario"
                        value={comentario}
                        onChange={e => setComentario(e.target.value)}
                        {...register('comentario', { min: 5 })}
                    />
                    {errors.comentario && <span>El comentario debe tener minimo 5 caracteres</span>}
                </label>
                <button type="submit">Enviar</button>
            </form>
        </article>
    )
}

FormComments.propTypes = {
    ciudad: PropTypes.arrayOf(PropTypes.object)
}

export default FormComments
