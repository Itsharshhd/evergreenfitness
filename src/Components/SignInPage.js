import React from 'react';
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { Link , useNavigate } from 'react-router-dom'; 
import  app  from '../firebase/config';
import { useUserAuth } from '../context/Auth';
import createUserDocument from '../hooks/createUserDocument';
import {updateProfile} from 'firebase/auth';





const SignInPage = () =>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const { signUp, logIn, user } = useUserAuth();
  let navigate = useNavigate();


  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { user } = await signUp(email, password);
      await createUserDocument(user, displayName);
      await logIn(email, password);
      updateProfile(user, {displayName})
      navigate("/register");
    } catch (err) {
      setError(err.message);
    }
  };




    return(
        <main style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        
          <div style={{margin: '15rem', border: '1px solid orangered', padding: '2rem'}}>
            <h2 style={{textAlign:'center', color:'orangered', margin: '2rem'}}>Sign Up</h2>
            { error && <Alert variant="danger">{error}</Alert> }
        
        <Form onSubmit={handleSignIn}>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Email" 
    onChange={(e)=> setEmail(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password"
    onChange={(e)=> setPassword(e.target.value )} 
    />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Control type="text" placeholder="Choose a Nickname" required
    onChange={(e)=> setDisplayName(e.target.value )} 
    />
  </Form.Group>
  <Col style={{display:'flex', justifyContent: 'center'}}>
  <Button variant="primary" type="submit">
    Signup
  </Button>
  </Col>
  <span style={{margin: '3rem'}}>
      Already a member? <Link to="/login">Log in</Link>
  </span>
  
</Form>

</div>
        </main>
    );
}

export default SignInPage;