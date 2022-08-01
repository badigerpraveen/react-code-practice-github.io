import React, { useState } from "react"; 





function Form(){  
    
      const [name , setName] = useState("");  
      const [age , setAge] = useState(""); 
       // react form should have vale and onchange atribute should come
    function handleChangeName (e){
        setName(e.target.value); 
       
    } 
    function handleChangeAge(e){
        setAge(e.target.value);
    }
    function formSubmit(e){
        e.preventDefault();
        console.log(name , age);
       
         }
    return(<> 
    <hr></hr>
  <h2> React Form </h2>
  <hr></hr>
  <form onSubmit={formSubmit}>
  <div> 
  <label htmlFor="name"> Name: </label> 
  <input type='text' id="name" name="name" value={name}  onChange={handleChangeName}/> 

   </div> 
   <div> 
  <label htmlFor="age"> Age: </label> 
  <input type='number' id="age" name="age" value={age}  onChange={handleChangeAge}/> 

   </div>
    
   <div>
  <button value="Submit"> Submit </button>
   </div>
   </form>
   </>);
}


export default Form ;