import React, {useReducer} from 'react'

const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
};


function reducer (state, action){
    switch (action.type) {
        case ACTION.INCREMENT:
            return {count : state.count + 1};
        case ACTION.DECREMENT:
            return {count: state.count - 1};
        default: 
            return state
    }

}

function Reducerhook() {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    const increment = () => {
        dispatch({type: ACTION.INCREMENT})
        }

    const decrement = () => {
        dispatch({type: ACTION.DECREMENT})
    }



  return (
      <div className='container my-5' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <button onClick={increment} className='btn btn-outline-dark mx-5'>Increment</button>
        <h1>{state.count}</h1>
        <button onClick={decrement} className='btn btn-outline-danger mx-5'>Decrement</button>
  
    </div>
  )
}

export default Reducerhook