import React from 'react'
import Todo from '../components/Todo'
import AddIcon from '../components/AddIcon'
import AddToTodo from '../components/AddToTodo'
import useTodoListStore from '../store/todoListStore'

const TodoList = () => {
  const { todos } = useTodoListStore()

  const handleButtonClick = (e) => {
    console.log(e.target.id)
  }
  return (
    <>
      <section className='flex flex-col gap-4 px-4 mt-4 text-[1.25rem]'>

        {
          todos.map((todo) => (
            <Todo id={todo.id} key={todo.id} todo={todo.todo} completed={todo.completed} isEditing={todo.isEditing} />
          ))
        }
        {/*<Todo todo={'Read Recommended books again'} /> */}
      </section>
      <AddIcon handleButtonClick={handleButtonClick} id={'todoAddIcon'} />
      {/* <AddToTodo /> */}

    </>

  )
}

export default TodoList
