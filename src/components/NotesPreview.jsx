import React, { useEffect, useRef, useState } from 'react'


const NotesPreview = ({ title, noteContent, lastEdited, handleClick, id }) => {

    const previewerForWeb = (
        inputString,
        previewerWidth = 0,
        font = "16px Arial"
    ) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        context.font = font;
        let inputStringShadow = inputString.slice();

        while (
            Number(context.measureText(inputStringShadow).width.toFixed(0)) >
            previewerWidth * 2
        ) {
            let inputStringShadowArray = inputStringShadow.split(" ");
            inputStringShadowArray.pop();

            inputStringShadow = inputStringShadowArray.join(" ");
            inputStringShadow += "..."
        }
        return inputStringShadow;
    };

    // would change preview to content.
    const [content, setContent] = useState(previewerForWeb(noteContent, window.innerWidth))


    const notePreviewRef = useRef(null)
    useEffect(() => {
        console.log(notePreviewRef.current.offsetWidth)
        const handleResize = () => {
            setContent(previewerForWeb(noteContent, notePreviewRef.current.offsetWidth))
        }
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }

        /*         return () => { notePreviewRef.removeEventListener('resize', handleResize) } */
    })


    return (
        <div onClick={() => handleClick(title, noteContent, id)} ref={notePreviewRef} className='rounded-2xl w-full flex flex-col gap-4 p-2 bg-[#efefef] cursor-pointer'>
            <h1 className='text-2xl cursor-pointer'>
                {title}
            </h1>
            <p className='opacity-60 cursor-pointer'>
                {content}
            </p>
            <p className='text-[0.8rem] cursor-pointer'>
                {lastEdited}
            </p>

        </div>
    )
}

export default NotesPreview
