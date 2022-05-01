import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UsersPage } from './pages/UsersPage'
import { Navbar } from './components/Navbar'
import { UserDetailPage } from './pages/UserDetailPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
