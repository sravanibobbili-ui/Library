import React from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import tamucc from './tamucc.png'
const Footer = () => {
  return (
    <footer  style={{height: "200px",backgroundColor:'#003463'}}>
    <Container>
        <Row>
          <hr/><hr/>
            <Col> <img src={tamucc} height= "50px" width="250px" alt='logo'></img></Col>
            <Col className='text-center py-3' style={{color:'white',Align:'right',float:'right'}}>LIBRARY TECHNOLOGIES</Col>
          
        </Row>
    </Container>
    </footer>
  );
}

export default Footer;
