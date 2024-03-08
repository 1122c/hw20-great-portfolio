import resume from "../assets/resume.pdf"

function Resume(){
   

    return(
        <div className="main">
            <h2>This is the Resume page</h2>
            {/* list front end and backend proficiences */}
        <h2>Check out my <a href={resume} download>resume</a></h2>
            <h2>Front End Proficiences</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>etc..</li>
            </ul>

            <h2>Backend End Proficiences</h2>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>etc..</li>
            </ul>
        </div>
    )
}

export default Resume;