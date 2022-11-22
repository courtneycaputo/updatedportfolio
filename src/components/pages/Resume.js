import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Resume2020 from '../../assets/Resume2020.pdf';


export default function Resume() {

  const jobStyle = {
    color: "#CC00FF",    
  }

  const resumeIcon = [
    {
      name:"fa-solid fa-file-pdf",
      links: Resume2020,
    }
  ]

  // const resumeStyle = {
  //   fontSize: "50px",
  //   color: "#FFFF00",
  // }

  return (
    <div className="container text-color">
      <h1><Row className="justify-content-md-center">
       Resume       
      </Row></h1>
      
      <Row className="justify-content-md-center">
      <center>
        {resumeIcon.map(icon => {
       return <a href={icon.links} className="resume-link" download><i className={icon.name}></i></a> 
       })}
       </center>
       </Row>

       <br>
       </br>
       

      <div >
        
      <Row className="justify-content-md-center">
        <Col lg="4">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Framework (Bootstrap, Materialize)</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>NoSQL (MongoDB)</li>
            <li>APIs (web, third-party, RESTful, server-side)</li>


          </ul>
        </Col>

        <Col lg="4">
          <h2>Experience</h2>
          <ul>
            <li>Controller <span style={jobStyle}>ExpressMed, 2020-2022</span> </li>
            <li>Finance Manager <span style={jobStyle}>Breg, 2019-2020</span> </li>
            <li>Accounting Manager <span style={jobStyle}>Breg, 2016-2019</span> </li>
            <li>Senior Accounting Analyst <span style={jobStyle}>Breg, 2015-2016</span> </li>
            <li>Senior Inventory Analyst <span style={jobStyle}>Breg, 2013-2015</span> </li>

          </ul>
        </Col>

        <Col lg="4">
          <h2>Education</h2>
          <ul>
            <li>Full Stack Coding Bootcamp <span style={jobStyle}>UC San Diego Extension Program</span></li>
            <li>Bachelor of Arts, Business Economics, Accounting Emphasis <span style={jobStyle}>UC Santa Barbara</span></li>
          </ul>
          
        </Col>
      
      
        </Row>
        
        </div>
    </div>
  );
}