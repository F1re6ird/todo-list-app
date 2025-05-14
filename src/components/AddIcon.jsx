import React from 'react'
import { MdAdd } from "react-icons/md";

const AddIcon = ({ handleButtonClick, id}) => {
    return (
        <div
            
            onClick={(e) => handleButtonClick(e)}
            className='opacity-100 bg-[#1c1c1c] fixed bottom-4 right-4 border-2 border-[#1c1c1c rounded-full'
        >
            <MdAdd id={`${id}`} size={44} fill='#fdfdfd' />
        </div>
    )
}

export default AddIcon
