import React from 'react';
import './Error.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

function Error() {
  
	return (
		<div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<div class="page-404">
    <div class="outer">
        <div class="middle">
            <div class="inner">
                
                <div class="inner-circle"><i class="fa fa-home"></i><span>404</span></div>
                <span class="inner-status">page is not found</span>
                <span class="inner-detail">
                    We can not find the page you're looking for.<br/>
                    {/* <a href="/">
                        <button style={{backgroundColor:" #39bbdb",color:"white"}}>HOME</button></a>  */}
                 
                 <Button variant="primary">HOME</Button>{' '}
                 
                </span>
            </div>
        </div>
    </div>
</div>
		</div>
	);
}
export default Error;