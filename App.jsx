
import React from 'react';
 import Slot from'./SlotM';
   

  function App ()   {
      return (
          <>
     <h1 > Project using React </h1>
     <div id ="main">
     <button className="btn" >START</button>
     <h4> 
     <span>This is the Slot game </span>
     </h4>
     
     </div>
     <div className="slotmachine">
     <Slot x="17" y="17" z="17"/>
     <hr/>
     <Slot x="17" y="15" z="19"/>
     <hr/>
     <Slot x="11" y="18" z="19"/>
     <hr/>
     <Slot x="20" y="20" z="20"/>
     </div>
     </>
     
      );
      
  };

  export default App;
  