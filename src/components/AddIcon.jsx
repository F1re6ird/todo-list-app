import React from 'react'
import { MdAdd } from "react-icons/md";

const AddIcon = ({ handleAddClick, id, addVisible }) => {
    return (
        <div
            onClick={() => handleAddClick()}
            className={`z-7 bg-[#1c1c1c] fixed bottom-4 right-4 border-2 border-[#1c1c1c rounded-full ${addVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
            <MdAdd id={`${id}`} size={44} fill='#fdfdfd' />
        </div>
    )
}

export default AddIcon
