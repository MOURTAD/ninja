import React from 'react';
import Form from 'react-bootstrap/Form';
import{ Button,Row,Col} from  'react-bootstrap';
import guid from './images/guidd2.PNG'

const Signup=()=>{


    return(

<Row className="sign">
<Col className='col' >
 <div className="parent" >
  <img className="image" src={guid} />
</div> 
<Form>
<Form.Label ></Form.Label>
 <Form.Control className="name"placeholder="Full Name" type="text"/>
<br/>
<Form.Label ></Form.Label>
 <Form.Control className="email" placeholder="Email" type="email"/>
<br/>
<Form.Label htmlFor="inputPassword5"></Form.Label>
     <Form.Control className="pass"
      placeholder="Password"
        type="password"
        id="inputPassword5"
       
      /> <br/>
      <Form.Label htmlFor="inputPassword5"> </Form.Label>
     <Form.Control className="pass"
      placeholder="Confirm Password"
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      /> <br/>
       
 <Button type="submit" className="submit">Sign-up</Button>
 <div>
 <hr className="line"/>
</div>

<p className="move"> Have an account already? Login </p>


 
      </Form>
      </Col>
</Row>
    )
}
export default Signup;