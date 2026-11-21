import { useNavigate } from "react-router"
import { useField } from '../hooks/index'
import { useAnecdotes } from '../hooks/useAnecdotes'

const CreateNew = () => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')
  const { addAnecdote } = useAnecdotes()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addAnecdote({
      content: content.inputFields.value,
      author: author.inputFields.value,
      info: info.inputFields.value,
      votes: 0
    })
    navigate("/")
  }

  const handleReset = (e) => {
    e.preventDefault()
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>

      <form onSubmit={handleSubmit}>
        <div>
          content
          <input
            name="content"
            {...content.inputFields}
          />
        </div>

        <div>
          author
          <input
            name="author"
            {...author.inputFields}
          />
        </div>

        <div>
          url for more info
          <input
            name="info"
            {...info.inputFields}
          />
        </div>

        <button>create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  )
}

export default CreateNew
