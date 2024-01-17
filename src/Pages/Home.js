import React from 'react';
import printer from './printer.jpg';
import { Container,Col,Button,Form,Stack } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import "./Home.css"
const Home = () => {
  return (
  
    <div>
        <Stack gap={1}>
      <Container>
        <h1 className="heading_style" > HOME</h1>
        <Row id="row">
        <div className="container_value" > 
       <Col xs={2} ><img class= "image_content" src={printer}   alt='logo'/></Col>
       <Col xs={2} >Laser Cutter 217L</Col>
       <Col xs={2}><b>Press start button</b>
       <Row style={{padding:"20px",width:"100px"}}><Button>Start</Button></Row>
       </Col>
       <Col xs={2}><b>Press Clear button</b>
       <Row style={{padding:"20px",width:"100px"}}><Button>Clear</Button></Row>
       </Col>
       
       <Col xs={3}><b>Enter Details</b>
       
       <br/>
       <label>Name</label>
       <input type="text" name="name" class="form-control"/>
       <label>Payment type</label>
       <select class="form-control" name="payment-type">
       <option></option>
       <option>IDT</option>
       <option>Cash</option>
       <option>Credit</option>
       <option>Internal</option>
       <option>pCard</option>
     
       </select>
       {/* <Row style={{padding:"20px",width:"100px"}}><Button>Start</Button></Row> */}
       <Form.Check type="checkbox" label="Tax Exempt" />
       <Form.Check type="checkbox" label="Community user" />
       </Col>
      
       
     <Col xs={4} >

       <table>
        <tr>
            <th>Amount</th>
            
        </tr>
        <tr>
            <td>Subtotal : $ 0</td></tr>
            <tr>
            <td>Tax: $0</td>
            </tr>
            <tr>
            <td>Total: $0</td>
        </tr>
        </table>
        <Row style={{padding:"20px",width:"100px"}}><Button>Print</Button></Row>
       </Col>

       

        
      
        </div>
      </Row>
   
      
    
        <Row id="row" className="justify-content-md-center">
        <div  className="container_value" > 
       
       <Col><img class= "image_content" src={printer}   alt='logo'/></Col>
       <Col><p class="paragraph_content">Laser Cutter 217L</p></Col>
       <Col>  "Press start" </Col>
       <Col><Button>Start</Button><Button>Clear</Button></Col>
         </div>
       
        </Row>
        </Container>
      
      {/* </ul> */}
   
      </Stack>
      </div>
      
  );
}

export default Home;
