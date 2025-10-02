import React from 'react'
import ChildCard from "./ChildCard"
function Card({userVal ,handleRemove}) {
  return (
<div className='flex gap-10 flex-wrap w-[90%] m-auto h-80 overflow-auto bg-zinc-300 mt-10 items-center justify-center' >
   {userVal.map((item,index)=>{return(
       <ChildCard  key={index} item={item} handleRemove={handleRemove} idx={index} />
    )
   })} 
</div>

  
  )
}

export default Card