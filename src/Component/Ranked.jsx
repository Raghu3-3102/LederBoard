import React, { useEffect, useLayoutEffect, useRef } from 'react'
import '../Style/Ranked.css'

import Add from './Add';
import {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {useSelector,useDispatch, useStore}  from 'react-redux';
import { addEntry } from '../Redux/Slice';
import logo from '../Asseit/logo_car.webp'
import { v4 as uuidv4 } from 'uuid';


import '../Style/NavBar.css'



function Ranked() {
  const [id] = useState(uuidv4);
  const [id1] = useState(uuidv4);
  const [id2] = useState(uuidv4);
  const [id3] = useState(uuidv4);
  const [id4] = useState(uuidv4);
  

  const [add,setAdd] = useState(false)
 const [expend,setExpend] = useState(false)
 const [data,setData] = useState([])
 const [view,setView] = useState(false)


  const scrooled = useRef(null)

        // const data = [
        //   { rank: 1, name: 'John Doe', carName: 'Ferrari', time: '1:42:30' },
        //   { rank: 2, name: 'Jane Smith', carName: 'Lamborghini', time: '1:44:15' },
        //   { rank: 3, name: 'Sam Brown', carName: 'Porsche', time: '1:45:20' },
        //   { rank: 4, name: 'Emily White', carName: 'McLaren', time: '1:46:05' },
        //   { rank: 5, name: 'John Doe', carName: 'Ferrari', time: '1:42:30' },
        //   { rank: 6, name: 'Jane Smith', carName: 'Lamborghini', time: '1:44:15' },
        //   { rank: 7, name: 'Sam Brown', carName: 'Porsche', time: '1:45:20' },
        //   { rank: 8, name: 'Emily White', carName: 'McLaren', time: '1:46:05' },
        //   { rank: 9, name: 'Sam Brown', carName: 'Porsche', time: '1:45:20' },
        //   { rank: 10, name: 'Emily White', carName: 'McLaren', time: '1:46:05' },
        //   { rank: 11, name: 'John Doe', carName: 'Ferrari', time: '1:42:30' },
        //   { rank: 12, name: 'Jane Smith', carName: 'Lamborghini', time: '1:44:15' },
        //   { rank: 13, name: 'Sam Brown', carName: 'Porsche', time: '1:45:20' },
        //   { rank: 14, name: 'Emily White', carName: 'McLaren', time: '1:46:05' },
        //   { rank: 15, name: 'John Doe', carName: 'Ferrari', time: '1:42:30' },
        //   { rank: 16, name: 'Jane Smith', carName: 'Lamborghini', time: '1:44:15' },
        //   { rank: 17, name: 'Sam Brown', carName: 'Porsche', time: '1:45:20' },
        //   { rank: 18, name: 'Emily White', carName: 'McLaren', time: '1:46:05' },
        //   { rank: 19, name: 'Sam Brown', carName: 'Porsche', time: '1:45:20' },
        //   { rank: 20, name: 'Emily White', carName: 'McLaren', time: '1:46:05' },
        //   // Add more data as needed
        // ];
        const [isMobile, setIsMobile] = useState(false);
   


        const toggleMobileMenu = () => {
          setIsMobile(!isMobile);
        };
        const rank = 78;
        const name = "raghu"
        const carName = 'vy';
        const time = '1:40:100'

        // dispatch(addEntry({rank,name,carName,time}))

        const raceEntries = useSelector((state) => state.race);
        
        var sliced_data = raceEntries.slice(0,10)
        
        const rest_data = raceEntries.slice(10,raceEntries.length)
        
        var RenderData;

    

        
           
        const setFalse = ()=>{

          setView(false)
        
          
          setExpend(true)    
          
          setAdd(!add)
           
          if (isMobile) {
            setIsMobile(false)
          }
         

        }

        useEffect(()=>{
          if (expend) {
          
            setData(raceEntries.slice(0,raceEntries.length))
            setView(true)
             
          }else{
             setData(raceEntries.slice(0,10))
             setView(false)
          }
        },[add,expend,view])
     

   

      const onScrolls = ()=>{

        
         if(scrooled.current){
          scrooled.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
         }
          
        
           
          if (isMobile) {
            setIsMobile(false)
          }
          
        

        

      }


      
    var num = 1;

 
    const onTrue = ()=>{

      setExpend(true)    
          
          setAdd(!add)
           
          if (isMobile) {
            setIsMobile(false)
          }
    }


   

      
      
   
        

        
    
    
  return (
   <div>

<nav className="navbar">
      <div className="logo"><img src={logo} /></div>
      <h1 className='leaderBoard'>LEADERBOARD</h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} >
        <li ><a  onClick={()=>{onTrue()}} key={1} style={{cursor:'pointer'}} className='btn'>Add+</a></li>
        {view ? <li className='btn'><a  onClick={()=>{onScrolls()}} key={2} style={{cursor:'pointer'}} className='btn1'>view</a></li> : " " }
      </ul>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>

    
    {add ? <Add setFalse={setFalse}  /> : ''}


     <div className='Ranked_cnt'>
      

     
         
      <div className='show_rank' key={id}>

      <div className="table-container" key={id1} >
   <div className="responsive-table"  key={id2}>
   <div className="row1" key={id3}>
         <div>Rank</div>
         <div>Name</div>
         <div>Car Name</div>
         <div>Time</div>
       </div>
     {data?.map((row, index) => (

       <>
       

      {row.newUser ? <div className={`row_new_user` }      ref={scrooled} key={row.rank}>
         <div className='rank_'>{row.rank}</div>
         <div>{row.name}</div>
         <div>{row.carName}</div>
         <div>{row.time}</div>
         
       </div> 

      :  <div className={`row ${row.rank === 1 || row.rank === 2 || row.rank === 3 ? `row2` : ' '  }` } key={index}>
         <div className='rank_'>{row.rank}</div>
         <div>{row.name}</div>
         <div>{row.carName}</div>
         <div>{row.time}</div>
         
       </div>}
       
       </>
     ))}

    
       {rest_data.map((rows,index)=>(

           <>
           
          

           {rows.newUser ? <div>  <hr style={{color:"red"}} />  <div className="row_lose" key={index} >
         <div className='rank_'>{rows.rank}</div>
         <div>{rows.name}</div>
         <div>{rows.carName}</div>
         <div>{rows.time}</div>
         
       </div></div> : " "}
           
       
           </>
        
        


))}
     
   </div>
 </div>

      </div>

   
     
   
 </div>
   </div>
  )
}

export default Ranked
