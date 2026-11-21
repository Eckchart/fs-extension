import { useAnecdotes } from '../hooks/useAnecdotes'

const AnecdoteList = () => {
  const { anecdotes, removeAnecdote } = useAnecdotes()
  
  return (
    <div>
      <h2>Anecdotes</h2>

      <ul>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <li>{anecdote.content}</li>
            <button onClick={() => removeAnecdote(anecdote.id)}>remove</button>
          </div>
        )}
      </ul>
    </div>
  )
}

export default AnecdoteList
