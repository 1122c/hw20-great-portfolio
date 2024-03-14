import resume from "../assets/resume.pdf"
import { Parallax, Background } from 'react-parallax';

function Resume(){
   

    return(
         <Parallax 
         blur={{ min: -15, max: 15 }}
        bgImage="https://live.staticflickr.com/65535/53538195622_d3678b0e83_z.jpg"
        bgImageAlt="the dog"
        strength={0}
         >



        <div className="main">
            <h2>Resume page</h2>
            {/* list front end and backend proficiences */}
        <h2>view <a href={resume} download>resume</a></h2>
            <h2>Front End Proficiences</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>

            <h2>Backend End Proficiences</h2>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>mySQL</li>
                <li>noSQL</li>
                <li>MongoDB</li>
                <li>Python</li>
            </ul>
        </div>

         <div style={{ height: '195px', width:"100%" }} />
    </Parallax>


    )
}

export default Resume;