import React, { useEffect, useRef, useState } from 'react'
import AddIcon from '../components/AddIcon';
import useNoteStore from '../store/noteStore';
import NoteList from '../components/NoteList';

const Notes = () => {

    // for notes
    const [isShowEditingPanel, setIsShowEditingPanel] = useState(false)
    const [isEditFull, setIsEditFull] = useState(false)
    const [currentTitle, setCurrentTitle] = useState("")
    const [currentContent, setCurrentContent] = useState("")
    const [editingId, setEditingId] = useState(null)
    const [addVisible, setAddVisible] = useState(true)
    const [newNote, setNewNote] = useState(false)

    // for store
    const { notes, updateNote, addToNotes, removeNote } = useNoteStore()

    // for animation
    const mainSectRef = useRef(null)
    const editTabRef = useRef(null)
    const titleRef = useRef(null)
    const contentRef = useRef(null)

    // for animation
    const one = useRef(false)
    const two = useRef(false)

    // for notes
    function handleNoteAction(editingId, newNote, currentTitle, currentContent) {
        if (currentTitle && currentContent) {
            if (newNote) {
                setAddVisible(true)
                addToNotes(currentTitle, currentContent)

                // Default settings
                setIsShowEditingPanel(false)
                setIsEditFull(false)
                one.current = false
                two.current = false

                setCurrentContent("")
                setCurrentTitle("")
                setNewNote(false)
            } else {
                // The delete is going to happen here.
                setAddVisible(true)
                removeNote(editingId)

                // Default settings
                setIsShowEditingPanel(false)
                setIsEditFull(false)
                one.current = false
                two.current = false

                setCurrentContent("")
                setCurrentTitle("")
                setNewNote(false)
            }
        }

    }

    // for animation
    const handleReturn = (editingId, currentTitle, currentContent) => {
        if (currentTitle && currentContent) {
            updateNote(editingId, currentTitle, currentContent)
            setIsEditFull(false)
            setIsShowEditingPanel(false)
            setAddVisible(true)
            one.current = false
            two.current = false

            setCurrentContent("")
            setCurrentTitle("")
            setEditingId(null)
        }
    }

    const handleAddClick = () => {
        setNewNote(true)
        setAddVisible(prev => !prev)
        setIsShowEditingPanel(true)
        one.current = true
    }
    const handleClick = (title, content, id) => {
        setIsShowEditingPanel(prev => !prev)
        one.current = !one.current
        setAddVisible(false)
        setEditingId(id)
        setCurrentTitle(title)
        setCurrentContent(content)
        setNewNote(false)
    }

    useEffect(() => {
        const handleSlide = () => {
            if (one.current === true && two.current === false) {
                setTimeout(() => {
                    setIsEditFull(true)
                    two.current = true
                }, 100)

            }
        }
        const current = mainSectRef.current;
        current?.addEventListener('transitionend', handleSlide)


        return () => current?.removeEventListener('transitionend', handleSlide)
    }, [])

    return (
        <div
            className={`relative w-[100%]  ${isEditFull ? "h-fit" : "min-h-svh"}`} >

            <NoteList mainSectRef={mainSectRef} isEditFull={isEditFull} notes={notes} handleClick={handleClick} isShowEditingPanel={isShowEditingPanel} />

            <div
                ref={editTabRef}
                className={`${isShowEditingPanel ? "" : "w-0"} z-20 transition duration-500 ease-in-ouT ${isEditFull ? "w-full min-h-[100vh]" : ""}`}
            >
                {
                    isEditFull && <div className='flex flex-col'>
                        <div
                            className='flex justify-between items-center p-4 gap-4 bg-green-200'
                        >
                            <button
                                onClick={() => handleReturn(editingId, currentTitle, currentContent)}
                                className='px-4 py-2 bg-black text-white'>
                                Click me
                            </button>

                            {/** */}
                            <button
                                onClick={() => {
                                    handleNoteAction(editingId, newNote, currentTitle, currentContent)
                                }}
                                className='px-4 py-2 bg-black text-white'
                            >
                                {newNote ? "ADD" : "Delete"}
                            </button>
                        </div>
                        <div className='p-4'>
                            <textarea
                                style={{ fieldSizing: "content" }}
                                placeholder='Title goes here...'
                                ref={titleRef}
                                value={currentTitle}
                                className='w-full text-3xl pb-0 p-4'
                                onChange={(e) => {
                                    setCurrentTitle(e.target.value)
                                }}
                            >
                            </textarea>
                            <p
                            >
                                tbc
                            </p>
                            <textarea
                                style={{ fieldSizing: "content" }}
                                placeholder='Content goes here...'
                                value={currentContent}
                                ref={contentRef}
                                className='w-full p-4'
                                onChange={(e) => setCurrentContent(e.target.value)}
                            >
                            </textarea>
                        </div>
                    </div>
                }
            </div>
            <AddIcon handleAddClick={handleAddClick} id={'notesAddIcon'} addVisible={addVisible} />
        </div >
    )
}
export default Notes