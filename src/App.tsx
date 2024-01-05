import React from 'react';

import "./App.scss"
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

export default function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}


