import React, { useEffect, useState, useRef } from 'react'
import Todo from '../components/Todo'
import AddIcon from '../components/AddIcon'
import AddToTodo from '../components/AddToTodo'
import useTodoListStore from '../store/todoListStore'
import DeleteIcon from '../components/DeleteIcon'


const TodoList = () => {

  // const [todos, setTodos] = useState([])
  const { todos, addTodo, updateTodoText, toggleIsEditing, deleteChecked, toggleCompleted } = useTodoListStore()


  const showDeleteIcon = (todos) => {
    return todos.some(todo => todo.completed === true);
  }

  const handleDeleteClick = () => {
    deleteChecked()
    setAnyChecked(false)
  }

  const [todo, setTodo] = useState("")
  const [isAddTodo, setIsAddTodo] = useState(false)
  const [isNewTodo, setIsNewTodo] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [anyChecked, setAnyChecked] = useState(showDeleteIcon(todos))


  const todoText = useRef("")
  const addToTodoRef = useRef(null)
  const overlayRef = useRef(null)
  const mainSectionRef = useRef(null)
  const newTodoInputRef = useRef(null)
  const todoRefs = useRef([])

  useEffect(() => {
    setAnyChecked(showDeleteIcon(todos))
  }, [todos])

  const handleChange = (id) => {
    toggleCompleted(id) // supposed to toggle
    console.log(todos)
    const newTodos = useTodoListStore.getState().todos
    console.log(newTodos)
    /* also bring function here */
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addToTodoRef.current && !addToTodoRef.current.contains(event.target) && isNewTodo) {
        setIsAddTodo(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isNewTodo])


  const handleAddClick = () => {
    todoText.current = ""
    setTodo("")
    setIsNewTodo(true)
    setIsAddTodo(true)
  }

  const updateTodo = (inputText, forNewTodo, id) => {
    const trimmed = inputText.trim()
    if (trimmed === "") return

    if (forNewTodo) {
      addTodo(trimmed)
    } else {
      updateTodoText(id, trimmed)
      toggleIsEditing(id)
    }

    newTodoInputRef.current.value = ""
    todoText.current = ""
    setIsAddTodo(false)
    setIsNewTodo(true)
    setEditingId(null)
  }



  return (
    <div className='min-h-screen relative pt-4'>
      <section
        ref={mainSectionRef}
        className='flex flex-col gap-4 px-4 text-[1.25rem] pb-44'
      >
        {todos.map((todo, index) => (
          <Todo
            id={todo.id}
            key={todo.id}
            todo={todo.todo}
            completed={todo.completed}
            isEditing={todo.isEditing}
            setIsAddToTodo={setIsAddTodo}
            setIsNewTodo={setIsNewTodo}
            todoRefs={todoRefs}
            index={index}
            setEditingId={setEditingId}
            todoTextRef={todoText}
            setTodo={setTodo}
            handleChange={handleChange}
          />
        ))}
      </section>

      <div
        ref={overlayRef}
        className={`transition-all duration-300 absolute inset-0 z-5 ${isAddTodo ? "opacity-20 bg-black" : "opacity-0 pointer-events-none"}`}
        style={{ height: mainSectionRef.current?.offsetHeight || '100%' }}
        onClick={() => isNewTodo && setIsAddTodo(false)}
      />

      <AddIcon handleAddClick={handleAddClick} id={'todoAddIcon'} addVisible={!isAddTodo} />

      <AddToTodo
        editingId={editingId}
        forNewTodo={isNewTodo}
        newTodoInputRef={newTodoInputRef}
        visible={isAddTodo}
        todo={todo}
        innerRef={addToTodoRef}
        updateTodo={updateTodo}
        setTodo={setTodo}
      />
      <DeleteIcon handleDeleteClick={handleDeleteClick} id={'todoDeleteIcon'} deleteVisible={(anyChecked && !isAddTodo)} />
    </div>
  )
}

export default TodoList