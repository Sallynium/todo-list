import { useTodos } from './hooks/useTodos'

export default function App() {
  const { addTodo, todos } = useTodos()
  return (
    <div className="min-h-screen bg-todo-bg text-todo-text p-4">
      <button onClick={() => addTodo('Test')} className="border border-todo-border px-2 py-1 mb-2">Add</button>
      <pre className="text-xs">{JSON.stringify(todos, null, 2)}</pre>
    </div>
  )
}
