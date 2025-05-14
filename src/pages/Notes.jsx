import React from 'react'
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import NotesPreview from '../components/NotesPreview';
import AddIcon from '../components/AddIcon';

const Notes = () => {

    const handleButtonClick = (e) => {
        console.log(e.target.id)
    }
    return (
        <section className='flex flex-col gap-4 px-4 mt-4 text-[1.25rem]'>
            <div className='border-2 flex items-center gap-2'>
                <FaSearch size={30} className='ml-2' />
                <input type="text" className='w-full h-full text-[1.25rem] py-4 pl-2' placeholder='Search for notes' />
            </div>
            <div className='flex items-center w-fit bg-gray-400 px-4 py-4 gap-2'>
                <h2 className='pr-2 border-r-2 border-[#1c1c1c]'>All</h2>
                <FaChevronDown className='' />
            </div>

            <NotesPreview title={"Why Focus is a Superpower"} preview={"In a world full of distractions, the ability to focus deeply on one task is increasingly rare - and therefore incredibly valuable. Every time you choose to eliminate noise (notifications and multitasking, busywork), you give yourself a competitive edge. Focus is not just about discipline, it’s about clarityknowing what matters most, and ignoring everything else. Master your focus, and you master your direction."} lastEdited={"March 29, 2025"} />
            <NotesPreview title={"Why Focus is a Superpower"} preview={"In a world full of distractions, the ability to focus deeply on one task is increasingly rare - and therefore incredibly valuable. Every time you choose to eliminate noise (notifications and multitasking, busywork), you give yourself a competitive edge. Focus is not just about discipline, it’s about clarityknowing what matters most, and ignoring everything else. Master your focus, and you master your direction."} lastEdited={"March 29, 2025"} />
            <NotesPreview title={"Why Focus is a Superpower"} preview={"In a world full of distractions, the ability to focus deeply on one task is increasingly rare - and therefore incredibly valuable. Every time you choose to eliminate noise (notifications and multitasking, busywork), you give yourself a competitive edge. Focus is not just about discipline, it’s about clarityknowing what matters most, and ignoring everything else. Master your focus, and you master your direction."} lastEdited={"March 29, 2025"} />
            <NotesPreview title={"Why Focus is a Superpower"} preview={"In a world full of distractions, the ability to focus deeply on one task is increasingly rare - and therefore incredibly valuable. Every time you choose to eliminate noise (notifications and multitasking, busywork), you give yourself a competitive edge. Focus is not just about discipline, it’s about clarityknowing what matters most, and ignoring everything else. Master your focus, and you master your direction."} lastEdited={"March 29, 2025"} />
            <NotesPreview title={"Why Focus is a Superpower"} preview={"In a world full of distractions, the ability to focus deeply on one task is increasingly rare - and therefore incredibly valuable. Every time you choose to eliminate noise (notifications and multitasking, busywork), you give yourself a competitive edge. Focus is not just about discipline, it’s about clarityknowing what matters most, and ignoring everything else. Master your focus, and you master your direction."} lastEdited={"March 29, 2025"} />

            <AddIcon handleButtonClick={handleButtonClick} id={'notesAddIcon'} />
        </section>
    )
}

export default Notes

