import * as z from 'zod'

const commentSchema = z.object({
    comentario: z.string().min(3, 'El comentario debe tener al menos 3 caracteres').max(255, 'El comentario debe tener como maximo 255 caracteres')
})

export default commentSchema