import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FirstPage from './Components/FirstPage';
import StateHook from './Hooks/StateHook';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<FirstPage/>}></Route>

    <Route path='/useState' element={<StateHook/>}></Route>

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
