import React from 'react';
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap';
 import { Link } from "react-router-dom";
 import tamucc from './tamucc.png';

import Picker from './Picker';
import Examplecode from './Examplecode';
const Header = () => {
  return (
   <header>
       <Navbar collapseOnSelect expand="lg" bg='primary' variant='dark' style={{paddingTop:"20px",paddingBottom:"20px"}}>
       <Container>
       <Navbar.Brand href="/"> 
        {/* <Navbar.Collapse> className='icons' style ={{justifyContent:'flex-start'}}> */}
            <Nav style={{gap:'0.5rem',alignitems:'center'}}>
            <img src={tamucc} height= "50px" width="250px" alt='logo'></img>
            </Nav>
            
       {/* </Navbar.Collapse> */}
       
       
       </Navbar.Brand>
       
       <Navbar.Brand>
       <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
         <Nav id="basic-navbar-nav navbar navbar-dark bg-primary">
        
        <Nav.Link href="/home" style={{color:'white', fontSize:'14px'}}>HOME</Nav.Link>
        <Nav.Link href="/Value" style={{color:'white', fontSize:'14px'}}>ADMIN</Nav.Link>
         <Nav.Link href="/Contact" style={{color:'white', fontSize:'14px'}}>LOGOUT</Nav.Link>
         <NavDropdown title="EXPORT" style={{color:'white', fontSize:'14px'}}>
                    <NavDropdown.Item href="/home">local cache Export</NavDropdown.Item>
                    <NavDropdown.Item href="/Value"> Export by date</NavDropdown.Item>
                    {/* <Picker/> */}
                    <Examplecode/>
                    <NavDropdown.Divider />
                    
                  </NavDropdown>
               
       
        </Nav>
        </Navbar.Collapse>
        </Navbar.Brand>
        
       </Container>
       
   
        </Navbar>
    </header>
     

  );
}

export default Header;
