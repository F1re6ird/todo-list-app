import React from 'react'

const NoteEditPanel = ({ editTabRef, titleRef, contentRef, currentTitle, currentContent, setCurrentTitle, setCurrentContent, handleReturn, handleNoteAction, newNote, isEditFull, isShowEditingPanel, editingId }) => {
    return (
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

                            // delete or update
                        <button
                            onClick={handleNoteAction}
                            className='px-4 py-2 bg-black text-white'
                        >
                            {newNote ? "Update" : "Delete"}
                        </button>
                    </div>
                    <div className='p-4'>
                        <textarea
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
                            placeholder='Content oes here...'
                            value={currentContent}
                            ref={contentRef}
                            className='w-full h-[90vh] p-4'
                            onChange={(e) => setCurrentContent(e.target.value)}
                        >
                        </textarea>
                    </div>
                </div>
            }
        </div>
    )
}

export default NoteEditPanel
