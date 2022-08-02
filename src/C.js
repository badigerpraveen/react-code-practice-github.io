import React from "react";
import {Consumer} from "./context";
function C(){
  
    return(<>
        <h2>This is Component C </h2>
        
        <Consumer>{data =><span>{data.Place}  </span>}</Consumer>
        
        
        
        
        
    </>);
}

export default C ;