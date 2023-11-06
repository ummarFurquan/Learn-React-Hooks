import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FirstPage from './Components/FirstPage';
import StateHook from './Hooks/StateHook';
import EffectHook from './Hooks/EffectHook';
import MemoHook from './Hooks/MemoHook'
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<FirstPage/>}></Route>

    <Route path='/useState' element={<StateHook/>}></Route>

    <Route path='/useEffect' element={<EffectHook/>}></Route>

    <Route path='/useMemo' element={<MemoHook/>}></Route>

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
