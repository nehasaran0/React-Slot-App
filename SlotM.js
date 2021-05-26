

import React from 'react';

const Slot =(props) =>{
  let x=props.x;
  let y=props.y;
  let z=props.z;
 
 if((x===y) && (y===z) ){
     return(
  <>
  <div className='nn'>
  <h3>
  {x} {y} {x}
  </h3>
  <h2>These are same</h2>
     <hr/>
  
  </div>
  </>
     );
 }else{
  return(
      <>
      <div className='nn'>
      <h3>
      {x} {y} {z}
      </h3>
      <h2>These are not same</h2>
         
      
      </div>
      </>
         );
   }
 } ;

export default Slot;
