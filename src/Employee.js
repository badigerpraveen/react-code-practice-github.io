import React from "react";
import {employees} from './employees';



export function Employeedetails(){
    return(<>
    <h1>Employee Details / Named export & import </h1>
    {employees.map((employee)=>{
       return <Employee employeeId={employee.employeeId}  employeeName={employee.employeeName} city={employee.city}/>
    })}
     
    </>)
} 

 function Employee({employeeId,employeeName,city}){
    return(<>
         <p> Employee ID : {employeeId} </p> 
         <p> Employee Name : {employeeName}</p>
         <p> city : {city}</p>
    </>);
 }
