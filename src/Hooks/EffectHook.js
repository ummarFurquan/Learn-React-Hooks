import React, {useState, useEffect} from 'react'

function EffectHook() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    },[resourceType])

  return (
    <>
    
    <div className='container my-5 ' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h1>The useEffect Hook!</h1>
    <h4>Click on any button to change the resourceType</h4> 
    </div >  
    <div className='container' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <button className='btn btn-outline-primary mx-5' onClick={() => setResourceType('posts')}>Posts</button>
        <button className='btn btn-outline-primary mx-5' onClick={() => setResourceType('users')}>Users</button>
        <button className='btn btn-outline-primary mx-5' onClick={() => setResourceType('comments')}>Comments</button>
    </div>
    <div className='container my-5'>
    <h1 style={{display:'flex', justifyContent:'center', alignItems:'center'}}>{resourceType}</h1> 
    <h3 className='container'>Data from the API</h3>
    {items.map(item => {
        return <p key={item.id}>{JSON.stringify(item)}</p>})}  
    </div>
    </>
  )
}

export default EffectHook