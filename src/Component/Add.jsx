import React, { useState } from 'react'
import '../Style/Add.css'
import { useDispatch } from 'react-redux'
import { addEntry } from '../Redux/Slice'

function Add({setFalse}) {

    const [adds,setAdds] = useState(true)
    const dispatch = useDispatch()

   
    const setingval =  ()=>{

    setFalse()

    
    

    }


    // form 

    
    const [names,setNames] = useState()
    const [carNames,setCarNames] = useState()
    const [minutes,setMinutes] = useState()
    const [seconds,setSeconds] = useState()
    const [miliSeconds,setMiliSeconds] = useState()
   
  
    
    
    const handleInput = ()=>{

      
      const name = names;
      const carName = carNames;
      const time = `${minutes}:${seconds}:${miliSeconds}`
   
      const rank = 8;
      const newUser = true;

       dispatch(addEntry({rank,name,carName,time,newUser}))

       setAdds(false)
       setFalse()
       alert('Click on view button to see your score and rank')


    }
   


  return (
    <div>
     
     {adds ?  <div className='modal-container'>

<div className='modal'>

    <div className='modal-content'>
    <button className='close'onClick={()=>{setingval()}} >x</button>
    
    <div className="animated-input-container">
      

      
      <input
        type="text"
        name="name"
       
        onChange={(e)=>{setNames(e.target.value)}}
        placeholder="Name"
        className="animated-input"
      />
      <input
        type="text"
        name="carName"
        
        onChange={(e)=>{setCarNames(e.target.value)}}
        placeholder="Car Name"
        className="animated-input"
      />
      <div className="time-input-group">
        <input
          type="number"
          name="minute"
      
          onChange={(e)=>{setMinutes(e.target.value)}}
          placeholder="Minute"
          className="animated-input time-input"
        />
        <span>:</span>
        <input
          type="number"
          name="second"
          
          onChange={(e)=>{setSeconds(e.target.value)}}
          placeholder="Second"
          className="animated-input time-input"
        />
        <span>:</span>
        <input
          type="number"
          name="millisecond"
          
          onChange={(e)=>{setMiliSeconds(e.target.value)}}
          placeholder="Millisecond"
          className="animated-input time-input"
        />



          


        
      </div>
      <button className='btn' style={{cursor:'pointer'}} onClick={()=>{handleInput()}}>Submit</button>
    </div>
   

    </div>

</div>




</div> : " "}

    </div>
  )
}

export default Add
