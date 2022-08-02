import React from "react"; 
import {Link} from "react-router-dom"

function Nav(){
    return(<>
        <ul className="navbar">
             <li> <Link to='/'>  Home </Link>  </li> 
             <li> <Link to='/About'>  About </Link>  </li> 
             <li> <Link to='/Contact'>  Contact </Link>  </li> 
             <li> <Link to='/ContextAPI'>  ContextAPI </Link>  </li> 
             <li> <Link to='/Test'>  Test </Link>  </li>
             
         </ul>
    </>)
}

export default Nav ;