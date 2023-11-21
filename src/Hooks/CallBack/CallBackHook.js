import React, { useState, useCallback } from 'react'
import List from './List'
function CallBackHook() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)


    const getItems = useCallback((incrementor) => { /*now when the useCallBack hook is used the getItems function is not created all over again when the app compoenent is 
      re-render and the "updating the items" is printed in the console  only when the number is changed and not when the theme is changed. */
        return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor] //now when you change the value of the number, something similar to a payload is added to the number 

    },[number])

    //this getItems in created again and again when the App component re-renders, to avoid this we use the useCallBack hook
    //
    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }
  return (
    <div style={theme}>
        <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/>

        <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>

        <List getItems={getItems}/>
    </div>
  )
}

export default CallBackHook