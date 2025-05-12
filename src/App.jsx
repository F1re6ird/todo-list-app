import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import Notes from './pages/Notes'
import TodoList from './pages/TodoList'
import Settings from './pages/Settings'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Notes />} />
          <Route path='todos' element={<TodoList />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<h1>404</h1>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
