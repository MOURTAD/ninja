import React from 'react';
import Form from 'react-bootstrap/Form';
import{ Button,Row,Col,Container} from  'react-bootstrap';
import "./index.css"
import guid from './images/guidd2.PNG'
const Login=()=>{


    return(
<>

<Container className="didi">
<div className="prnt" >
  <img className="img" src={guid} />
</div> 
 
<Form >
    
<Form.Label ></Form.Label>
      <Form.Control className="email"
      placeholder="email"
        type="email"
      />
<br/>
<Form.Label htmlFor="inputPassword5"></Form.Label>
      <Form.Control
       placeholder="Password" className="password"
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <br/>
      <Button type="submit" className="submit"> Login </Button>
      <div>
 <hr className="line"/>
</div>
<p className="move"> Don't have an account? Sign up </p>

      </Form>
</Container>

</>
    )
}
export default Login;