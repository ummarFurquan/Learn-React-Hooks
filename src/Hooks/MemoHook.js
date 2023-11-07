//WITHOUT useMemo Hook
// import React, {useState} from 'react'

// function MemoHook() {
//   const [number , setNumber] = useState(0);
//   const [dark, setDark] = useState('black');
//   const doubleNumber = slowFunction(number)

//   const themeStyles = {
//     backgroundColor : dark ? 'black' : 'white',
//     color : dark ? 'white' : 'black'
//   }
//   return (
//     <>
//     <div className='container my-5' style={{display:'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center'}}>
//         <h1>The useMemo Hook</h1>
//         <strong>The useMemo hook is used for performance optimization!</strong>
//     </div>
//     <div className='container' style={{display:'flex', flexDirection:'column'}}>
//       <input className='my-2' type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
//       <button className='btn btn-outline-dark' onClick={() => setDark(prevDark => ! prevDark)}>Change Theme</button>
//       <div className='my-2' style={themeStyles}>{doubleNumber}</div>
//     </div>
//     </>
//   )
// }


// function slowFunction (num) {
//     for (let i = 1; i< 100000000; i++) {}
//   return num * 2;
// }

// export default MemoHook




//with useMemo Hook
import React, {useState, useMemo, useEffect} from 'react'

function MemoHook() {
  const [number , setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber =  useMemo(() => {
    return slowFunction(number)
  }, [number])

  /* when you add useEffect hook and give it a dependency of themeStyles the useEffect prints a message in the console stating theme changed and even when you change the value of the number because the whole componenet re- renders,
To avoid this and to make sure the useEffect runs only when the themeStyles is changed we wrap the themeStyles inside the useMemo hook
*/

  const themeStyles = useMemo(() =>  {
    return {
    backgroundColor : dark ? 'black' : 'white',
    color : dark ? 'white' : 'black'
  }
},[dark])

useEffect(() => {
console.log('theme changed')
},[themeStyles])

  return (
    <>
    <div className='container my-5' style={{display:'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center'}}>
        <h1>The useMemo Hook</h1>
        <h4>The memo in useMemo stands for Memorization <strong> &#40; The React useMemo Hook returns a memoized value&#41;</strong></h4>
        <h4> &#40;The useMemo Hook only runs when one of its dependencies update. This can improve performance. &#41;</h4>
        <strong>The useMemo hook is used for performance optimization!</strong>
    </div>
    <div className='container' style={{display:'flex', flexDirection:'column'}}>
      <input className='my-2' type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
      <button className='btn btn-outline-dark' onClick={() => setDark(prevDark => ! prevDark)}>Change Theme</button>
      <div className='my-2' style={themeStyles}>{doubleNumber}</div>
    </div>
    </>
  )
}


function slowFunction (num) {
    for (let i = 1; i< 1000000000; i++) {}
  return num * 2;
}

export default MemoHook


