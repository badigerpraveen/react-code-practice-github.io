import React from "react"; 
import { Provider } from "./context";
//import Home  from "./Home";
import {user} from "./ContextAPI";
import B from "./B";
import C from "./C";
//const myContaxt =  React.createContext() ;
function A(){
 //let user = user.call();
    return (
    <>
      <h2> This is Component A</h2> 
      <Provider value={user}>
  
      <B/> 
      <C/>
  </Provider>
   

      
    </>

    );
} 

export default A;