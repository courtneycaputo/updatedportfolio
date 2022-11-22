import React from 'react';
import projects from '../../projects.json';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Cards that will go into Projects()
function ProjectCards(props) {
    return (
      <div className="newcard"> 
        <div className="img-container">
          <img alt={props.name} src={process.env.PUBLIC_URL + props.image}/>
        </div>
        <div className="content">
              <p className="card-title">{props.name}</p>
              <p className="project-description">{props.description}</p>
              <p class="proj-icons-container">
              <a href={props.github} className="project-icon"><i class="fa-brands fa-github"></i> </a> 
              <a href={props.deployedlink} className="project-icon"><i class="fa-solid fa-display"></i></a> 
       
             
             </p>
              <p class="topics">
                    {props.builtwith}
                </p>
        </div>
      </div>
    );
}


function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

// Map through cards
function Projects () {  

  return (
      <section className="container">
        <div className="text-color">
          <center><h2>Portfolio</h2></center>
          
        </div>

        <Wrapper id="card-data">
          {projects.map((project) => (
            <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deployedlink={project.deployedlink} builtwith={project.builtwith} description={project.description}/>
          ))}
        </Wrapper>
      </section>
  
  );
}






// function Portfolio(props) {

// const iconStyle ={
//   textDecoration: "none",
//   'a:hover': {
//     color: "#FFFF00",
//   },
//   fontSize: "25px",
// }

//   return (
//     <div className="container"> 
        
//           <div className="myCard">
//             <img src={props.image} className="myCardImage" alt={props.name}/>
            
//             <div className="card-body">
//               <h5 className="card-title">{props.name}</h5>
//               <p className="card-text">{props.description}</p>
//             </div>
            
//             <div className="card-body">
//               <a href={props.github} className="card-link" target="_blank" rel="noreferrer" style={iconStyle}><i class="fa-brands fa-github"></i> </a>
//               <a href={props.deployedlink} className="card-link" target="_blank" rel="noreferrer" style={iconStyle}><i class="fa-solid fa-display"></i></a>
//             </div>

//           </div>
        
//     </div>
//   );
// }

// // function Content(props) {
// //   return <div className="content">{props.children}</div>;
// // }

// function Projects () {  
//   return (
//   <>
//   <div >
//   <center><h1>Portfolio</h1></center>
//   </div>

//   <Row className="justify-content-md-center">
//     <Col lg="3">
      
//       {projects.map((project) => (
//         <Portfolio 
//         name={project.name}
//         image={project.image}
//         github={project.github}
//         deployedlink={project.deployedlink}
//         builtwith={project.builtwith}
//         description={project.description}
//         />
        
//       ))}

//     </Col>
//   </Row>
//   </>
//   );
// }

export default Projects;