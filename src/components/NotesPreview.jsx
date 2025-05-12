import React, { useEffect, useRef, useState } from 'react'


const NotesPreview = ({ title, preview, lastEdited }) => {

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
    const [content, setContent] = useState(previewerForWeb(preview, 350))


    const notePreviewRef = useRef(null)
    useEffect(() => {
        console.log(notePreviewRef.current.offsetWidth)
        const handleResize = () => {
            setContent(previewerForWeb(preview, notePreviewRef.current.offsetWidth))
        }
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }

        /*         return () => { notePreviewRef.removeEventListener('resize', handleResize) } */
    })



    return (
        <div ref={notePreviewRef} className='w-full flex flex-col gap-4 p-2 bg-[#fafafa]'>
            <h1 className='text-2xl'>
                {title}
            </h1>
            <p className='opacity-60'>
                {content}
            </p>
            <p className='text-[0.8rem]'>
                {lastEdited}
            </p>

        </div>
    )
}

export default NotesPreview
