import React from "react"

const AddToTodo = ({ setTodo, innerRef, visible, updateTodo, newTodoInputRef, todo, forNewTodo, editingId }) => {
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <div
      ref={innerRef}
      onClick={(e) => e.stopPropagation()}
      className={`rounded-2xl p-2 w-[90%] flex flex-col gap-4 bg-white fixed bottom-4 left-1/2 translate-x-[-50%] transition-all duration-300 z-20 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
    >
      <div className="px-4 flex gap-4 justify-between items-center">
        <input type="checkbox" className="w-[20px] h-[20px]" disabled />
        <input
          value={todo}
          ref={newTodoInputRef}
          onChange={handleChange}
          id="input-element"
          className="flex justify-center items-center h-[50px] flex-1 border px-2 rounded-md"
          type="text"
          placeholder="Enter todo..."
        />
      </div>

      <div className="flex justify-end items-center">
        <button
          onClick={() => updateTodo(todo, forNewTodo, editingId)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-[tomato]"
        >
          {forNewTodo ? "Done" : "Update"}
        </button>
      </div>
    </div>
  )
}

export default AddToTodo
