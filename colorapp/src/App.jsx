import React, { useState } from 'react'
import Count from './Count'
import { BrowserRouter , Routes , Route, Link} from  "react-router-dom"

function App() {

  const[color,setColor]= useState('black')
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Count/> }/>
    </Routes>
    </BrowserRouter>
    <div style={{backgroundColor:color, height:"400px", width:"400px"}}></div>

    <button onClick={()=>setColor('red')}>Red</button>
    <button onClick={()=>setColor('green')}>Green</button>
    <button onClick={()=>setColor('blue')}>Bluw</button>
    <button onClick={()=>setColor('gray')}>Gray</button>
    
    </>
  )
}

export default App