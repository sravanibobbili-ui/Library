import React from 'react';
import {Container,Card,Button,Row,Col} from 'react-bootstrap'
import {useState} from 'react';
let Counter = () => {

    let [state,setState]= useState({
        count:0
    });

    let incr = () => {
        setState( {
            count: state.count+1
        });
    }
    let decr = () => {
        setState({
            count: state.count-1
        });
    }
    return (
        <>
           <Container>
            <Row>
                <Col xs={4}>
                   <Card className ="shadow-lg">
                       <Card.Body>
                            <p className="display-2">{state.count}</p>
                            <Button onClick= {incr} variant ="success" className="m-1" >Increment</Button>
                            <Button onClick= {decr} variant ="warning" className="m-1" >Increment</Button>
                       </Card.Body>
                   </Card>

        
                
                </Col>
            </Row>
           </Container>
        </>
    )
};
export default Counter;