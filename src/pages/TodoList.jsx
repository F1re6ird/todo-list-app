import React, { useEffect, useState, useRef } from 'react'
import Todo from '../components/Todo'
import AddIcon from '../components/AddIcon'
import AddToTodo from '../components/AddToTodo'
import useTodoListStore from '../store/todoListStore'

const TodoList = () => {
  const [todo, setTodo] = useState()
  const [isAddTodo, setIsAddTodo] = useState(false)
  const { todos, addTodo } = useTodoListStore()

  /* addTodo Ref */
  const addToTodoRef = useRef(null)
  const overlayRef = useRef(null)
  const mainSectionRef = useRef(null)
  const newTodoInputRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addToTodoRef.current && !addToTodoRef.current.contains(event.target)) {
        setIsAddTodo(false)
      }

    }

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside)

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  const handleAddClick = (e) => {
    console.log(e)
    setIsAddTodo(prev => prev = !prev)
  }
  const newTodo = (todo) => {
    if (todo) {
      addTodo(todo)
      newTodoInputRef.current.value = ""
      setTodo("")
      setIsAddTodo(false)
    }

  }
  return (
    <div className='min-h-screen relative pt-4'>
      <section
        ref={mainSectionRef}
        className='flex flex-col gap-4 px-4 text-[1.25rem] pb-44'>

        {
          todos.map((todo) => (
            <Todo id={todo.id} key={todo.id} todo={todo.todo} completed={todo.completed} isEditing={todo.isEditing} />
          ))
        }
        {/*<Todo todo={'Read Recommended books again'} /> */}
      </section>
      <div
        onClick={(e) => e.stopPropagation()}
        ref={overlayRef}
        className={`transition-all duration-300 h-[${mainSectionRef.current?.offsetHeight}] bg-black absolute inset-0 z-5 ${isAddTodo ? "opacity-20" : "pointer-events-none opacity-0"}`}
      ></div>
      <AddIcon handleAddClick={handleAddClick} id={'todoAddIcon'} addVisible={!isAddTodo} />
      <AddToTodo newTodoInputRef={newTodoInputRef} visible={isAddTodo} todo={todo} setTodo={setTodo} ref={addToTodoRef} newTodo={newTodo} />

    </div>

  )
}

export default TodoList
