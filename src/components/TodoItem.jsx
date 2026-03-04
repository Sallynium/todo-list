import { useState, useRef, useEffect } from 'react'

export default function TodoItem({ todo, onToggle, onEdit, onDelete, dragHandleProps }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  function startEdit() {
    setEditValue(todo.text)
    setIsEditing(true)
  }

  function saveEdit() {
    onEdit(todo.id, editValue)
    setIsEditing(false)
  }

  function cancelEdit() {
    setEditValue(todo.text)
    setIsEditing(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') saveEdit()
    if (e.key === 'Escape') cancelEdit()
  }

  return (
    <div className="group flex items-center gap-3 bg-todo-card px-4 py-4 border-b border-todo-border">
      {/* Drag handle */}
      <span
        {...dragHandleProps}
        className="text-todo-border hover:text-todo-muted cursor-grab opacity-0 group-hover:opacity-100 transition-opacity select-none"
        aria-label="Drag to reorder"
      >
        ⠿
      </span>

      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
          todo.completed
            ? 'bg-gradient-to-br from-[#57DDFF] to-[#C058F3] border-transparent'
            : 'border-todo-border hover:border-todo-accent'
        }`}
        aria-label={todo.completed ? 'Mark as active' : 'Mark as complete'}
      >
        {todo.completed && (
          <svg className="w-3 h-3 text-white" viewBox="0 0 11 9" fill="none">
            <path
              d="M1 4.304L3.696 7l6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Text or Edit input */}
      {isEditing ? (
        <input
          ref={inputRef}
          value={editValue}
          onChange={e => setEditValue(e.target.value)}
          onBlur={saveEdit}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-todo-text outline-none text-sm border-b border-todo-accent"
        />
      ) : (
        <span
          onClick={startEdit}
          className={`flex-1 text-sm cursor-pointer ${
            todo.completed ? 'line-through text-todo-muted' : 'text-todo-text'
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Delete */}
      <button
        onClick={() => onDelete(todo.id)}
        className="text-todo-muted hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 text-lg leading-none"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  )
}
