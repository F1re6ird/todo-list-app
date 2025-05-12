import React from 'react'
import Todo from '../components/Todo'
import AddIcon from '../components/AddIcon'
import useTodoListStore from '../store/todoListStore'

const TodoList = () => {
  const { todos } = useTodoListStore()
  return (
    <section className='flex flex-col gap-4 px-4 mt-4 text-[1.25rem]'>

      {
        todos.map((todo) => (
          <Todo id={todo.id} key={todo.id} todo={todo.todo} completed={todo.completed} isEditing={todo.isEditing}/>
        ))
      }
      {/*       <Todo todo={'Read Recommended books again'} /> */}

      {console.log(todos)}
      <AddIcon />
    </section>
  )
}

export default TodoList
