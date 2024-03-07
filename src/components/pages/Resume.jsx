import {useState, useEffect} from "react"

function Resume(){
    const [name, setName] = useState("Rachel")

    useEffect(()=> {
        defaultName()
    }, [])
    
function changeName(){
setName("Robby")
}
function defaultName(){
setName("Stephen")
}

    return(
        <div className="main">
            <h2>This is the Resume page</h2>
            {/* list front end and backend proficiences */}
           
            <button onClick={changeName}>click</button>
            {name}
        </div>
    )
}

export default Resume;