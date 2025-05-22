import React from 'react'
import { MdDelete } from "react-icons/md";

const DeleteIcon = ({ handleDeleteClick, id, deleteVisible }) => {
    return (
        <div
            onClick={() => handleDeleteClick()}
            className={`z-7 bg-[#1c1c1c] fixed bottom-4 left-4 border-2 border-[#1c1c1c rounded-full ${deleteVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
            <MdDelete id={`${id}`} size={44} fill='#fdfdfd' />
        </div>
    )
}

export default DeleteIcon
