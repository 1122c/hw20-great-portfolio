import { Link } from "react-router-dom";

function Nav(){
    


    return(
        <div className="main">
            <h2>This is the Nav page</h2>
            <ul>
               <Link to="/"><li>About</li></Link> 
               <Link to="/portfolio"><li>Portfolio</li></Link> 
               <Link to="/contact"><li>Contact</li></Link> 
               <Link to="/resume"><li>Resume</li></Link> 
                 
            </ul>
        </div>
    )
}

export default Nav;