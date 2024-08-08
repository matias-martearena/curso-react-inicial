import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const FormComments = ({ city }) => {
    // NOTE: This will be change with database in the future
    const [comments, setComments] = useState(() => {
        const savedComments = localStorage.getItem('comments')
        return savedComments ? JSON.parse(savedComments) : []
    })

    const [comment, setComment] = useState('')
    const selectedCity = city[0]

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments])

    const handleSubmit = e => {
        e.preventDefault()
        if (comment.trim().length >= 3) {
            const newComment = { id: comments.length, comment }
            const updatedcomments = [...comments, newComment]
            setComments(updatedcomments)
            setComment('')
        }

        // Delete all comments before write 5
        if (comments.length >= 5) handleClearComments()
    }

    // This is use to delete the comments
    const handleClearComments = () => {
        setComments([])
        localStorage.removeItem('comments')
    }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">
                    <h3>Do you want to add a comment?</h3>
                    <input
                        type="text"
                        name="comment"
                        id="comment"
                        placeholder="Write your comment here..."
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </label>
                <button type="submit">Send</button>
            </form>
            <ul>
                {selectedCity.comments.map(comment => (
                    <li key={comment.id}>{comment.comment}</li>
                ))}
                {comments.map(c => (
                    <li key={c.id}>{c.comment}</li>
                ))}
            </ul>
        </article>
    )
}

FormComments.propTypes = {
    city: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FormComments
