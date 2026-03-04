import { useState } from 'react'

export default function TodoInput({ onAdd }) {
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onAdd(value)
    setValue('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 bg-todo-card rounded-md px-4 py-4 mb-4 shadow-xl"
    >
      <span className="w-5 h-5 rounded-full border-2 border-todo-border flex-shrink-0" />
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Create a new todo..."
        className="flex-1 bg-transparent text-todo-text placeholder-todo-muted outline-none text-sm"
      />
      <button
        type="submit"
        className="text-todo-muted hover:text-todo-accent transition-colors text-xl leading-none"
        aria-label="Add todo"
      >
        +
      </button>
    </form>
  )
}
