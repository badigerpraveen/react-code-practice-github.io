import React from "react"; 
import A  from "./A";

 export let user ={
     name:"Sagar",
     age: 21,
     Place: "Bangalore"
  }

function ContextAPI(){
    return(<>
        <h2>This is context API example </h2>
        <A/>
    </>)
} 

export default ContextAPI ;











