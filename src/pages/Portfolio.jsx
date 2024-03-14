import ProjectCard from "./projectCard";
import projects from "../assets/projects.json"
import { Parallax, Background } from 'react-parallax';

function Portfolio(){
    


    return(
           <Parallax 
         blur={{ min: -15, max: 15 }}
        bgImage="https://live.staticflickr.com/65535/53538195622_d3678b0e83_z.jpg"
        bgImageAlt="the dog"
        strength={0}
         >


        <div className="main">
            <h2>My Work</h2>
            <div className="cardFlex">
        {
           projects.map(project => (
            <div>
          
            <ProjectCard
            title={project.title}
            description={project.description}
            github={project.github}
            link={project.link}
            image={project.image}
            />
            
            </div>
           )) 
        }
        </div>
        </div>

        <div style={{ height: '10px', width:"100%" }} />
    </Parallax>


    )
}

export default Portfolio;