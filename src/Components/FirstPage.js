import React from 'react'
import { useNavigate } from 'react-router-dom'

function FirstPage() {
    const nav = useNavigate();

    const navToState = () => {
        nav('/useState');
    }
    const navToEffect = () => {
      nav('/useEffect')
    }
    
    const navToMemo = () => {
      nav('/useMemo')
    }
    const navToRef = () => {
      nav('/useRef')
    }
  return (
    <>
    <div className='container'>
        
            <h1 className='my-5 mx-5' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>Learn About React Hooks!</h1>
        </div>
        <div className='mx-5' style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <button onClick={navToState}  className='btn btn-outline-dark mx-5'>useState Hook</button>
        <button onClick={navToEffect} className='btn btn-outline-dark mx-5'>useEffect Hook</button>
        <button onClick={navToMemo} className='btn btn-outline-dark mx-5'>useMemo Hook</button>
        <button onClick={navToRef} className='btn btn-outline-dark mx-5'>useRef Hook</button>
        <button className='btn btn-outline-dark mx-5'>useContext Hook</button>
        <button className='btn btn-outline-dark mx-5'>useReducer Hook</button>
        <button className='btn btn-outline-dark mx-5'>useCallBack Hook</button>
        <button className='btn btn-outline-dark mx-5'>useState Hook</button>
        <button className='btn btn-outline-dark mx-5'>useState Hook</button>
        <button className='btn btn-outline-dark mx-5'>useState Hook</button>
        </div>
        <div className='container my-5 mx-5'>
            <h1>About Hooks</h1>
        </div>
        </>
  )
}

export default FirstPage