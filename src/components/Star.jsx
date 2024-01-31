import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './style.css'

const Star = (ns) => {

  const n=ns.n;

  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);

  

  function handleclick(getcurindex) {
    setrating(getcurindex);
  }

  function mouseenter(getcurindex) {
    sethover(getcurindex);
  }

  function mouseleave() {
    sethover(rating);
  }


  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height:'100vh',
      width:'100vw',
    }} >
      {[...Array(n)].map((_,index)=>{
        index+=1;
        return <FaStar
        key={index}
        className={index <= (hover || rating) ? 'active' :'inactive'}
        size={40}
        onClick={()=>handleclick(index)}
        onMouseEnter={()=>mouseenter(index)}
        onMouseLeave={()=>mouseleave}
        />
      }
      )}
    </div>

  )
}



export default Star