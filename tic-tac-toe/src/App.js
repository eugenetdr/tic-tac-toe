import React from 'react';
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import { TicTacToe } from './views/TicTacToe';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
