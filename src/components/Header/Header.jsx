import styles from "./Header.module.css"
import Nav from "../Nav";

function Header(){
    
return(
        <div className="main">
            <h2 className={styles.font}>Rachel Valenzuela</h2>
            {/* import nav here */}
            <Nav />
        </div>
    )
}

export default Header;