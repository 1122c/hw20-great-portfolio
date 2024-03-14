import { Parallax, Background } from 'react-parallax';

function About() {
    return (
         <Parallax 
         blur={{ min: -15, max: 15 }}
        bgImage="https://live.staticflickr.com/65535/53538195622_d3678b0e83_z.jpg"
        bgImageAlt="the dog"
        strength={0}
         >

        <div className="main">
        
            <h2 className="headertest">I am a developer</h2>
            
            <p>Blending my background in healthcare and software engineering, I've developed a nuanced approach to solving complex problems with precision and creativity. As a physical therapist assistant, I cultivated a keen eye for detail and patient-centered solutions, now informing my software development. My involvement in a genomic project enriched my expertise, particularly in data visualization, enabling me to effectively present complex data. I am eager to combine my unique mix of healthcare insights, software engineering skills, and data visualization experience from this project to create impactful web applications.</p>
        </div>

    <div style={{ height: '450px', width:"100%" }} />
    </Parallax>

    );
}

export default About;

