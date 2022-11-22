import React from 'react';
import myPicture from '../../assets/mypicture.png';
import { Row, Col } from 'react-bootstrap';


export default function About() {
  return (
    <div className="container aboutMeText text-color">
      <br></br>
      <h1><Row className="justify-content-md-center">
       About Me       
      </Row></h1>

      <Row>
        <Col lg="3">
          <img src={myPicture} className="my-picture" alt="Courtney" />
        </Col>
      
        <Col lg="5">
          <p>
          <br></br>
            Hello, and welcome to my portfolio! My name is Courtney, and I am currently a student in the Full Stack Coding Bootcamp offered through UC San Diego Extensions. I have a bachelor's degree from UC Santa Barbara in Economics with an emphasis in Accounting. After spending 11 years working in Accounting and Finance, I have decided to change career paths and enter the world of IT/Tech. 
          </p>
        </Col>
            
      </Row>
      <br></br>
      <br></br>
    </div>
  );
}
