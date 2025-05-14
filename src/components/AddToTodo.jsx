import React from 'react'

const AddToTodo = () => {
    return (
        <div onClick={(e) => { e.stopPropagation() }} className="border-2 border-[red] p-2 w-[90%] flex flex-col gap-4 bg-white fixed bottom-0 left-1/2 translate-x-[-50%] mb-4 transition-all duration-300 opacity-100 scale-100 z-20">
            <div className="px-4 flex gap-4 justify-between items-center">
                <input className="w-[20px] h-[20px]" type="checkbox" name="" id="" />
                <input
                    id="input-element"
                    className="flex justify-center items-center h-[50px] flex-1"
                    type="text"
                />
            </div>


            <div className="flex justify-end items-center flex-1">
                <button className="bg-blue-500 text-white px-4 py-2">Done</button>
            </div>
        </div>
    )
}

export default AddToTodo
