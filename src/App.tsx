import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { UsersPage } from './pages/UsersPage';
import { CardPage } from './pages/CardPage';

function App() {
  return (
    <div>
      Hello world!
      <BrowserRouter>
        <NavLink to="/card">TO CARD</NavLink>
        <NavLink to="/users">TO USERS</NavLink>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/card" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
