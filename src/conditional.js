import React from "react"; 
 
 function ConditionalRendering(){ 
     
    const person = {
        logginedIn: true,  
        
    } ;
    
    if( person.logginedIn){
        return(<> 
        <h2>  Conditional Rendering / multiple returns / if / Else </h2>
              <h3>User Logged In </h3>
            </>);
    }else{ 
        return(<>
             <h2> Conditional Rendering / multiple returns / if / Else </h2>
              <h3>User Logged Out </h3>
        </>)

    }   
    

} 

 export function TernaryOpt(){
    const value = {
        
        val : false, 
    } ;
    
  return(<> 
    <h3> Ternary Operator </h3>
    {value.val ? <h2> True </h2> : <h2> False </h2> } 
    
     
  </>)
 }

 export function Shortcircuit(){
  let obj = {
    signIn : false , 
    
    }
 return (<> 
  
  <h3> Short circuit </h3>
  { obj.signIn && <h3> User Account exist </h3> }
  { obj.signIn || <h3> Create User Account </h3>}
 </>);

 }
               
export default ConditionalRendering ; 