import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'


function App(){
  const[count ,setcount]=useState(0);
  
  useEffect(()=>{
    setTimeout(()=>{
      setcount((count)=>count+1)
    },1000)
  },[count])
  
   return(
  <>
  <h1>{count}</h1> 
  </>
    )
  }
  export default App
