// Front end comment data validation with zod
import * as z from 'zod'

const commentSchema = z.object({
    comentario: z.string().min(3, 'The comment is too short').max(255, 'The comment is too long')
})

export default commentSchema