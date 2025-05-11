import React from 'react'
import NotesPreview from './components/NotesPreview'

const App = () => {
  return (
    <div className='flex flex-col items-center p-4 font-mono bg-[#efefef] min-h-svh gap-4'>
      <NotesPreview title={'What I think about when I talk about running'} preview={'Running is like you are forcing yourself to be in diffuse thinking mode, do you know what diffuse thinking mode might be my friend. My name is Yekini Abdulwahab and you aee my latest friend reader.'} lastEdited={"March 23, 2025. 11:20 PM"} />
      <NotesPreview title={'What I think about when I talk about running'} preview={'Running is like you are forcing yourself to be in diffuse thinking mode, do you know what diffuse thinking mode might be my friend. My name is Yekini Abdulwahab and you aee my latest friend reader.'} lastEdited={"March 23, 2025. 11:20 PM"} />
      <NotesPreview title={'What I think about when I talk about running'} preview={'Running is like you are forcing yourself to be in diffuse thinking mode, do you know what diffuse thinking mode might be my friend. My name is Yekini Abdulwahab and you aee my latest friend reader.'} lastEdited={"March 23, 2025. 11:20 PM"} />
      <NotesPreview title={'What I think about when I talk about running'} preview={'Running is like you are forcing yourself to be in diffuse thinking mode, do you know what diffuse thinking mode might be my friend. My name is Yekini Abdulwahab and you aee my latest friend reader.'} lastEdited={"March 23, 2025. 11:20 PM"} />
    </div>
  )
}

export default App
