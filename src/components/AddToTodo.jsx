import React from "react"

const AddToTodo = ({ ref, visible, newTodo, newTodoInputRef, todo, setTodo }) => {

    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    return (
        <div ref={ref} onClick={(e) => { e.stopPropagation() }} className={`rounded-2xl p-2 w-[90%] flex flex-col gap-4 bg-white fixed bottom-4 left-1/2 translate-x-[-50%] mb-4 transition-all duration-300 z-20  ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
            <div className="px-4 flex gap-4 justify-between items-center">
                <input className="w-[20px] h-[20px]" type="checkbox" name="" id="" />
                <input
                    ref={newTodoInputRef}
                    onChange={(e) => handleChange(e)}
                    id="input-element"
                    className="flex justify-center items-center h-[50px] flex-1"
                    type="text"
                />
            </div>


            <div className="flex justify-end items-center flex-1">
                <button
                    onClick={() => newTodo(todo)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-[tomato]"
                >
                    Done
                </button>
            </div>
        </div>
    )
}

export default AddToTodo
