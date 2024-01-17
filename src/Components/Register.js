import  React , {Component, KeyboardEvent} from 'react'
import {Container,Row,Col,Card,Form,Button } from 'react-bootstrap';
import {useState} from 'react';
let Register = () =>
{
    let [state,setState] = useState({
        user : {
            username : " ",
            email : " ",
            password : " "
        }
    });
    let updateInput = (e) => {
         setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name] : e.target.value
            }
         })
    }
      let register = (e) => {
        e.preventDefault();
        console.log(state.user);
      }
    
    return (
        <>
        <Container>
            <Row>
                <Col md={3}>
                <Card>
                 <Card.Header className="p-3" style={{backgroundColor: 'orange'}}>
                    <h4>Register</h4>
                </Card.Header>
                    <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control 
                                    name="username"
                                    onChange={updateInput}
                                    type = "text" placeholder ="Username"/>
                         </Form.Group>
                         <Form.Group className="mb-3">
                            <Form.Control 
                                     name="email"
                                     onChange={updateInput}
                                     type = "email" placeholder ="email"/>
                         </Form.Group >
                         <Form.Group className="mb-3">
                            <Form.Control 
                            name="username"
                            onChange={updateInput}
                            type = "password" placeholder ="Password"/>
                         </Form.Group>
                         <Form.Group className="mb-3">
                            <Button onClick={register} variant ="warning" type = "submit">Register</Button> 
                         </Form.Group>


                    </Form>
                    </Card.Body>

                </Card>
                </Col>
            </Row>
            
        </Container>
        </>
    )
}
export default Register