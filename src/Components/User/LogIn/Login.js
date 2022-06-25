import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
          <div className="row  ">
              <div className="col-lg-8">
              <Form className="  form-login" >
              <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicId">
    <Form.Label>Instituion ID</Form.Label>
    <Form.Control type="Id" placeholder="ID" />
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicBatch">
    <Form.Label>Batch</Form.Label>
    <Form.Control type="batch" placeholder="Batch" />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

              </div>
          </div>
        </div>
    );
};

export default Login;