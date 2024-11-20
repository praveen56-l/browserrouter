import{NavLink} from "react-router-dom"


const Navigation=()=>{
  return(
    <>
    <NavLink
    to="/">Home
    </NavLink><br/>

    <NavLink
    to="/education">education
    </NavLink><br></br>
    <NavLink
    to="/Currentskill">Currentskill

    </NavLink><br></br>
    <NavLink
    to="/Contact">Contact

    </NavLink>
    
    </>
  )  
} 
export default Navigation