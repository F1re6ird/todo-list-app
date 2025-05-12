import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MdOutlineSettings, MdNotes, MdOutlineCheckBox, MdDarkMode, MdLightMode } from "react-icons/md";
import useStore from '../store/store';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useStore()
    return (
        <nav className='sticky top-0 shadow-md z-50 flex justify-between items-center py-2 px-4 bg-white'>
            <Link to='/settings'><MdOutlineSettings size={44} /></Link>
            <div className='flex gap-12'>
                <NavLink to={'/'}><MdNotes size={44} /></NavLink>
                <NavLink to={'/todos'}><MdOutlineCheckBox size={44} /></NavLink>
            </div>

            {darkMode ? <MdLightMode onClick={toggleDarkMode} size={44} /> : <MdDarkMode onClick={toggleDarkMode} size={44} />}
        </nav>
    )
}

export default Navbar
