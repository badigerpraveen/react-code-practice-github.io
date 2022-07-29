import './App.css';
import Hello from './class-component';
import {Employeedetails} from './Employee';
import {useState , useEffect} from 'react';
import {teams} from './data';
// nested components 
function App() {
  return (
    <div className="App">
    <h1 className='heading'>   Hello worl !! </h1> 
    
    <Great/>  
    <Developer/> 
    <Booklist/> 
    <Hello/> 
    <UserDetails/>
    <Studentdetails/> 
    <Employeedetails/> 
    <EventBasics/> 
    <ReactStates/>
    <Teams/> 
    <Useeffect/>
    </div>
  );
} 

function  Great(){
return(
<>  
 <h2 style={{color:'blue',fontSize:'50px'}}>React learning   </h2>
</>
 ) 
 } 
function  Developer (){
return(
  <>  
 <h2> React Developer </h2> 
 
</>
 ) 
 
}

// props 
//const title = "React";
//const author = "Rajeev";
// props Destructring 
function Booklist(){
  return(
    <>
   
  <Book title="Book1" author="Pavan" year="2020"/> 
  <Book title="Book2" author="Praveen" year="2019"/>
  <Book title="Book3" author="Sagar" year="2022"> 
    <p> This is new Book  </p></Book>
    </>
  )
} 

// function Book(props){
//   return(
//     <>
//      <h2>Book Title : {props.title}</h2>
//      <p> Author : {props.author}</p>
//      <p>Year : {props.year}</p>
//     </>
//   )
// } 
// Props 
// function Book(props){
//   const {title,author,year,} =  props ;
//   return(
//     <>
//      <h2>Book Title : {title}</h2>
//      <p> Author : {author}</p>
//      <p>Year : {year}</p>
//     </>
//   )
// }
// 
// function Book({title,author,year,children}){
 
//   return(
//     <>
//      <h2>Book Title : {title}</h2>
//      <p> Author : {author}</p>
//      <p>Year : {year}</p>
//      <p>childern prop : {children}</p>
    
//     </>
//   )
// } 

const Book = ({title,author,year,children}) =>{
 return (
  <>
    <h2>Book Title : {title}</h2>
     <p> Author : {author}</p>
     <p>Year : {year}</p>
     <p>childern prop : {children}</p>
  </>
 )

}

const user1 ={
   id: 1 ,
   userName:"Ravi"
} 

const user2 ={
  id: 2 ,
  userName:"Pradeep"
}


function  UserDetails (){
  return(
    <>  
   <h2> Listing Data </h2> 
   <User id={user1.id} userName={user1.userName}/>
   <User id={user2.id} userName={user2.userName}/>
  </>
   ) 
  }


function User({id,userName}){
  return(<>
    <p>User Id : {id} </p>
    <p>User Name : {userName} </p>
  </>);
}  

// listing Data 
const studentData = 
  [ 
  {
    id : 1 ,
    name: "sagar",
  } ,
  {
    id : 2 ,
    name: "Santosh",
  },{
    id : 3 ,
    name: "Rajeev",
  }
  

]



function Studentdetails(){
 return(<>
     <h1>student details </h1> 
     {studentData.map((sdt)=>{
     return <Student key={sdt.id} id={sdt.id} name={sdt.name}/>
     })};

    
 </>)

}


function Student({id,name}){
   
  return(<>
   <p> student ID : {id},  </p>
   <p>  student Name : {name}</p>
  </>) 
} 

function EventBasics(){ 
  function clickHandler(){
    alert("hello");
 }
  return(<>
<h1> Event Basics Click Handler </h1>
<button type="button" onClick={clickHandler}>Click Me</button>
  </>);
}
 //let titleText = "React State";


 
function ReactStates(){ 
  let  [titleText, setText] = useState("React State") ; 
  //let titleText = "React State";
  function clickHandle(){
    if(titleText === "React State" ){
      setText("useState Hook");
    }else{
      setText("React State");
    }
    
  }
  return(<>
    <h2>React state / UseState Hook </h2>
    <h3>{titleText} </h3> 
    <button type="button" onClick={clickHandle}>Click Here </button>
  </>)
}

function Teams(){
  const [teamMembers,setTeamMember] = useState(teams);
  function emptyMember(){
    setTeamMember([]);
  }
  return(<>
   <h3>State With arrays </h3>
    {teamMembers.map((member)=>{
       return <h3 key={member.id}> {member.Name} </h3>
    })}
    <button type="submit" onClick={emptyMember}>Clear Members </button>
  </>)
}  
 

// useEffect 
function Useeffect(){
  const [count, setCount] = useState(0) ;
  useEffect(()=>{
    console.log("click");
  })
  function counter(){
    setCount(count+1);
  }
  return(<>
     <h3> useEffect Hook </h3> 
    <h2>{count}</h2> 
  <button type="submit" onClick={counter}> Count++ </button>
  </>)
}

export default App;
