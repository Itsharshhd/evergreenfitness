import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/Auth";



const LogInPage = () =>{

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

    return(
        <main style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{margin: '15rem', border: '1px solid orangered', padding: '2rem'}}>
            <h2 style={{textAlign:'center', color:'orangered', margin: '2rem'}}>Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogIn}>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Email" 
    onChange ={(e)=> setEmail(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" 
    onChange = {(e) => setPassword(e.target.value)}/>
  </Form.Group>
  <Col style={{display:'flex', justifyContent: 'center'}}>
  <Button variant="primary" type="submit">
    Login
  </Button>
  </Col>
   <hr />
        <div>
          <GoogleButton
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
  <span style={{margin: '3rem'}}>
      Not a member? <Link to="/signup">Sign Up</Link>
  </span>
  
</Form>

</div>

        </main>
    );
}

export default LogInPage;