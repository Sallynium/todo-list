import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import TodoItem from './TodoItem'

export default function TodoList({ todos, filter, onToggle, onEdit, onDelete, onReorder }) {
  const isDragDisabled = filter !== 'all'

  function handleDragEnd(result) {
    if (!result.destination) return
    onReorder(result)
  }

  if (todos.length === 0) {
    return (
      <div className="bg-todo-card px-4 py-10 text-center text-todo-muted text-sm border-b border-todo-border">
        No tasks here
      </div>
    )
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todo-list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <Draggable
                key={todo.id}
                draggableId={todo.id}
                index={index}
                isDragDisabled={isDragDisabled}
              >
                {provided => (
                  <div ref={provided.innerRef} {...provided.draggableProps}>
                    <TodoItem
                      todo={todo}
                      onToggle={onToggle}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      dragHandleProps={isDragDisabled ? {} : provided.dragHandleProps}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
