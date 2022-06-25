import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Confirmation from '../../Admin/Confirmation/Confirmation';
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password:"",
        instId:"",
        batch:"",
        imgUrl:"",
        phoneNumber:"",
        university:"",
        college:"",
        jobPlace:"",
        status:""



      })
    const handleSubmit=(event)=>{
       event.preventDefault();
       formData.status="unconfirmed";
       console.log(formData);
       fetch('http://localhost:5000/users/sign-up',
       {
        method : 'POST',
        headers: 
          {
                  'Content-Type': 'application/json',
      },
        mode: 'cors', 
        body: JSON.stringify(formData)
       }).then((res)=>{
         console.log("added");
       }).catch((err)=>{
         console.log("problem");
       })
       
      
        
    }
    return (
        <div>
             <div className="row  ">
              <div className="col-lg-8">
              <Form className=" form-login" onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" onChange={(e)=>setFormData({...formData,name:e.target.value})} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setFormData({...formData,password:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicId">
    <Form.Label>Instituion ID</Form.Label>
    <Form.Control type="number" placeholder="ID" onChange={(e)=>setFormData({...formData,instId:e.target.value})} />
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicBatch">
    <Form.Label>Batch</Form.Label>
    <Form.Control type="number" placeholder="Batch" onChange={(e)=>setFormData({...formData,batch:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPhoneNUmber">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" placeholder="Phone Number" onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicImageURL">
    <Form.Label>Image URL</Form.Label>
    <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setFormData({...formData,imgUrl:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUniversity">
    <Form.Label>University</Form.Label>
    <Form.Control type="text" placeholder="University" onChange={(e)=>setFormData({...formData,university:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCollege">
    <Form.Label>College</Form.Label>
    <Form.Control type="text" placeholder="College" onChange={(e)=>setFormData({...formData,college:e.target.value})} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicJobPlace">
    <Form.Label>Job Place</Form.Label>
    <Form.Control type="text" placeholder="Job Place" onChange={(e)=>setFormData({...formData,jobPlace:e.target.value})} />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
{/* 
<Confirmation data={formData}/> */}

<p>Already LignUp?<Link to="/log-in">LogIn</Link></p>

              </div>
          </div>
            
        </div>
    );
};

export default SignUp;