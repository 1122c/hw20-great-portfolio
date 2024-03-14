


function ProjectCard(props){
    return (
<div>
<div className="card" style={{width: "22rem"}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <h5 className="card-title">{props.title}</h5>

    <p className="card-text">{props.description}</p>

     <div className="card-button">
    <a href={props.github} className="btn btn-primary">Github Repo</a>

    <a href={props.link} className="btn btn-primary">Check it out!</a>
    </div>
  </div>
</div>
</div>
    )
}

export default ProjectCard