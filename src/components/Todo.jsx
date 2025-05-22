import useTodoListStore from '../store/todoListStore'

const Todo = ({ todo, id, completed, setIsAddToTodo, setIsNewTodo, todoRefs, index, setEditingId, todoTextRef, setTodo, handleChange }) => {
  const { toggleIsEditing } = useTodoListStore()

  const handleClick = () => {
    const currentText = todoRefs.current[index]?.innerText || ""
    todoTextRef.current = currentText
    setTodo(currentText)
    setIsNewTodo(false)
    setIsAddToTodo(true)
    setEditingId(id)
    toggleIsEditing(id)
  }

  return (
    <div className='flex items-center gap-4 pl-4 bg-[#fafafa] rounded-2xl'>
      <input
        type="checkbox"
        className='w-8 h-8'
        checked={completed}
        onChange={() => handleChange(id)}
      />

      <p
        ref={(el) => (todoRefs.current[index] = el)}
        onClick={handleClick}
        className={`py-4 pl-2 flex-1 transition duration-300 ease-in-out ${completed ? "line-through opacity-45" : ""
          }`}
      >
        {todo}
      </p>
    </div>
  )
}

export default Todo
