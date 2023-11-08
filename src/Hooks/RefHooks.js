import React, {useState, useEffect,useRef} from 'react'

function RefHooks() {
    const [name, setName] = useState('')
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name;
    }, [name])
    

  
  return (
    <>
    <div className='container my-5' style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    <div className='my-5'>
        <h1>THe useRef Hook</h1>
    </div>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <div>My name is : - {name} and it used to be : - {prevName.current}</div>
    </div>
    </>
  )
}

export default RefHooks