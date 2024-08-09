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

    // NOTE: The validation for data comment will be make
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
                <div className="w-72 m-4">
                    <div className="relative w-full min-w-[200px] h-10">
                        <input
                            className="peer w-full h-full bg-[#eae5d9] font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] focus:border-gray-900"
                            placeholder=" "
                            type="text"
                            name="comment"
                            id="comment"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />
                        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                            <input type="text" className="rule-input" />
                            {''}Add a comment
                        </label>
                    </div>
                </div>
                <button className="bg-[#282121] text-[#efdcd3] p-1 ml-4 rounded-md" type="submit">
                    Send
                </button>
            </form>
            <ul className="m-4 flex flex-col justify-center items-start">
                {selectedCity.comments.map(comment => (
                    <li className="mb-3 ml-4 list-disc" key={comment.id}>
                        {comment.comment}
                    </li>
                ))}
                {comments.map(c => (
                    <li className="mb-3 list-disc" key={c.id}>
                        {c.comment}
                    </li>
                ))}
            </ul>
        </article>
    )
}

FormComments.propTypes = {
    city: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FormComments
