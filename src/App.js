import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FirstPage from './Components/FirstPage';
import StateHook from './Hooks/StateHook';
import EffectHook from './Hooks/EffectHook';
import MemoHook from './Hooks/MemoHook'
import RefHooks from './Hooks/RefHooks'
import ContextHook from './Hooks/usecontext/ContextHook';
import Reducerhook from './Reducerhook';
import CallBackHook from './Hooks/CallBack/CallBackHook';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<FirstPage/>}></Route>

    <Route path='/useState' element={<StateHook/>}></Route>

    <Route path='/useEffect' element={<EffectHook/>}></Route>

    <Route path='/useMemo' element={<MemoHook/>}></Route>

    <Route path='/useRef' element={<RefHooks/>}></Route>

    <Route path='/useContext' element={<ContextHook/>}></Route>

    <Route path='/useReducer' element={<Reducerhook/>}></Route>

    <Route path='/useCallBack' element={<CallBackHook/>}/>

   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
