import React from "react";
import {Consumer} from "./context";
//import A from "./A";


function B(){
    return(<>
        <h2>This is Component B </h2>
       
        <Consumer>{data =><span>{data.name} {data.age}   </span>}</Consumer> 
    </>);
}

export default B ;