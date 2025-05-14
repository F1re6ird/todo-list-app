import React, { useState } from 'react'
import useTodoListStore from '../store/todoListStore'


const Todo = ({ todo, id, completed, isEditing }) => {

    const [editedText, setEditedText] = useState(todo)

    const { toggleTodo, toggleIsEditing, updateTodoText } = useTodoListStore()

    const handleBlur = () => {
        updateTodoText(id, editedText)
        toggleIsEditing(id)
    }


    return (
        <div className='flex border-2 border-[#1c1c1c] items-center gap-4 pl-4 bg-gray-100 rounded-2xl'>
            <input

                type="checkbox"
                className='w-8 h-8'
                checked={completed}
                onChange={() => { toggleTodo(id) }}
            />

            {isEditing ?

                /* see if i can use a p tag instead of an input tag here.*/
                <input
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    autoFocus
                    onBlur={handleBlur}
                    type="text"
                    className='pl-2 py-4 flex-1 h-[120px]' /> :
                <p
                    onClick={() => toggleIsEditing(id)}
                    className={`${completed ? 'opacity-45 py-4 line-through  h-[120px] pl-2 transition flex-1 flex justify-start items-center duration-300 ease-in' : 'transition duration-300 ease-in-out py-4 h-[120px] flex justify-start items-center flex-1 pl-2'}`}
                >
                    {todo}
                </p>}
        </div>
    )
}

export default Todo
