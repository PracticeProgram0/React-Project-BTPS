import React, { useState } from 'react'

function Count() {  

  const [counts,setCount]=useState(1)
  return (
    <>
    
    <button onClick={()=>setCount(counts+1)}>Add</button>

    <h1>{counts}</h1>
    
    <button onClick={()=>setCount(counts-1)} >Subtract</button>
    
    </> 
  )
}

export default Count
