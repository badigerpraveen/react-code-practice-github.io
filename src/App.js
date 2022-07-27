import './App.css';

// nested components 
function App() {
  return (
    <div className="App">
    <h1 className='heading'>   Hello worl !! </h1> 
    
    <Great/>  
    <Developer/> 
    <Booklist/>
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
    Props (properties)
  <Book title="Book1" author="Pavan" year="2020"/> 
  <Book title="Book2" author="Praveen" year="2019"/>
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

function Book(props){
  const {title,author,year} =  props ;
  return(
    <>
     <h2>Book Title : {title}</h2>
     <p> Author : {author}</p>
     <p>Year : {year}</p>
    </>
  )
}

export default App;
