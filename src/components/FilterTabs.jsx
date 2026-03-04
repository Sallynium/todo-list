const TABS = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

export default function FilterTabs({ filter, onFilterChange, activeCount, onClearCompleted }) {
  return (
    <div className="flex items-center justify-between bg-todo-card px-4 py-3 rounded-b-md text-xs text-todo-muted">
      <span>
        {activeCount} item{activeCount !== 1 ? 's' : ''} left
      </span>

      <div className="flex gap-3">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => onFilterChange(tab.key)}
            className={`font-bold transition-colors hover:text-todo-text ${
              filter === tab.key ? 'text-todo-accent' : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        className="hover:text-todo-text transition-colors"
      >
        Clear Completed
      </button>
    </div>
  )
}
