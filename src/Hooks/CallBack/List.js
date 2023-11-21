import React, {useState, useEffect} from 'react'

function List({getItems}) {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(5)) // 5 is the value which we are passing to the getItems function in the main componet.
                              

        console.log('updating the items') 
    },[getItems])
  return items.map(item => <div key={item}>{item}</div>)
}

export default List