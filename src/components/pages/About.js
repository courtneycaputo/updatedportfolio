import React from 'react';
import myPicture from '../../assets/mypicture.png';
import { Row } from 'react-bootstrap';


export default function About() {
  return (
    <div className="container aboutMeText text-color">
      <br></br>
      <center><img src={myPicture} className="my-picture" alt="Courtney" /></center>
      
      <h1><Row className="justify-content-md-center">
       About Me       
      </Row></h1>
      <p>
      Hello, and welcome to my portfolio! My name is Courtney, and I am currently a student in the Full Stack Coding Bootcamp offered through UC San Diego Extensions. I have a bachelor's degree from UC Santa Barbara in Economics with an emphasis in Accounting. After spending 11 years working in Accounting and Finance, I have decided to change career paths and enter the world of IT/Tech. 
      </p>
            
      <p>
        This area has always been interesting to me. While working in Accounting, I often represented the department on IT projects including system implementations, system migrations, and system integrations. I also worked closely with IT on developing necessary reporting for accounting month end close cycle and was even given access to SQL to write my own queries. I am excited to start this new journey of my career!
      </p>
      <br></br>
      <br></br>
    </div>
  );
}
