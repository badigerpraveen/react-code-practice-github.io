import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nav from './NaveBar';
import ContextAPI from './ContextAPI'
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
// nested components 
function App() {
  return (
    <div className="App">
    <Router> 
    <Nav/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>  
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>  
    <Route path='/ContextAPI' element={<ContextAPI/>}/> 
    <Route path='/*' element={<h1> 404 Erro Page</h1>}/>  
     
    </Routes>
    </Router>
     </div>
  );
} 


/// conditional rendering 

export default App;
