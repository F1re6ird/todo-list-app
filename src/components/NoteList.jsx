import React from 'react'
import { FaSearch, FaChevronDown } from "react-icons/fa";
import NotesPreview from './NotesPreview';

const NoteList = ({ mainSectRef, isEditFull, notes, handleClick, isShowEditingPanel }) => {
    return (
        <section
            ref={mainSectRef}
            className={`flex flex-col gap-4 text-[1.25rem]  transition duration-300 ease-in-out ${isShowEditingPanel ? "pointer-events-none -translate-x-1/3 scale-90 p-0 m-0" : "pb-24 px-4 mt-4 scale-100"} ${isEditFull ? "invisible h-0 w-0 " : "w-full"}`}>

            {isEditFull === false && <>
                <div className='border-2 flex items-center gap-2'>
                    <FaSearch size={30} className='ml-2' />
                    <input type="text" className='w-full h-full text-[1.25rem] py-4 pl-2' placeholder='Search for notes' />
                </div>
                <div className='flex items-center w-fit bg-[#efefef] px-4 py-4 gap-2'>
                    <h2 className='pr-2 border-r-2 border-[#1c1c1c]'>All</h2>
                    <FaChevronDown className='' />
                </div>
                {notes.map(note => (
                    <NotesPreview handleClick={handleClick} key={note.id} title={note.title} noteContent={note.content} lastEdited={note.lastEdited} id={note.id} />
                ))}
            </>}

        </section>
    )
}

export default NoteList
