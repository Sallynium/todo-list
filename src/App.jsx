import { useTodos } from './hooks/useTodos'
import TodoInput from './components/TodoInput'
import FilterTabs from './components/FilterTabs'
import TodoList from './components/TodoList'

export default function App() {
  const {
    filter,
    filteredTodos,
    activeCount,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    clearCompleted,
    setFilter,
    reorderTodos,
  } = useTodos()

  return (
    <div className="min-h-screen bg-todo-bg text-todo-text">
      {/* Header */}
      <div
        className="h-52 bg-cover bg-center flex items-start px-6 pt-12"
        style={{
          backgroundImage: 'linear-gradient(135deg, #3A7CFD 0%, #C058F3 100%)',
        }}
      >
        <div className="w-full max-w-[540px] mx-auto">
          <h1 className="text-3xl font-bold tracking-[0.3em] text-white">TODO</h1>
        </div>
      </div>

      {/* Main content — overlaps header */}
      <main className="px-6 -mt-28">
        <div className="max-w-[540px] mx-auto">
          <TodoInput onAdd={addTodo} />

          <div className="rounded-md overflow-hidden shadow-xl">
            <TodoList
              todos={filteredTodos}
              filter={filter}
              onToggle={toggleTodo}
              onEdit={editTodo}
              onDelete={deleteTodo}
              onReorder={reorderTodos}
            />
            <FilterTabs
              filter={filter}
              onFilterChange={setFilter}
              activeCount={activeCount}
              onClearCompleted={clearCompleted}
            />
          </div>

          <p className="text-center text-xs text-todo-muted mt-10">
            Drag and drop to reorder list
          </p>
        </div>
      </main>
    </div>
  )
}
