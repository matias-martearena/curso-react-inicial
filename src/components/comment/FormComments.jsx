import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import commentSchema from '../../schemas/commentValidation.js'

const FormComments = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            comentario: ''
        }
    })

    const onSubmit = data => {
        // Logica
        console.log(data)
        // Logica
        reset()
    }

    return (
        <article>
            <p>¿Quieres agregar un comentario de la ciudad?</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="comentario">
                    <p>Comentarios: </p>
                    <input
                        type="text"
                        name="comentario"
                        id="comentario"
                        placeholder="Escribe tu comentario aqui..."
                        onChange={e => e.target.value}
                        {...register('comentario')}
                    />
                </label>
                <button type="submit">Enviar</button>
                {errors.comentario && <p>{errors.comentario.message}</p>}
            </form>
        </article>
    )
}

export default FormComments
