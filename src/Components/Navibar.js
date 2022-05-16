import React from "react";
import {useState, useEffect} from "react";
import {useUserAuth} from "../context/Auth";
import { Link, useNavigate } from 'react-router-dom';

import '../Styles/Navibar.css';
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




const Navibar = () => {

   const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    const [photoURL,setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png")


    useEffect(() => {
    if (user && user.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user])



    const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
        return(
            <div>
            <Navbar bg="dark" variant="dark">
                <Container style={{display: 'flex', justifyContent:"space-between"}}>
                    <Navbar.Brand href="/">
                        <img 
                         alt="logo"
                         src= 'https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/logo.jpeg?alt=media&token=1ec7e7cd-97d1-4a4e-a9d7-9abe0aaeceb9'
                         width="30"
                         height="30"
                         className="d-inline-block align-top"
                         />{' '}
                         Evergreen Fitness
                    </Navbar.Brand>
                    <Navbar.Brand href="/profile">
                       { user &&
                      <span>{user.displayName} 
                       <img 
                       alt="propic"
                       src={photoURL}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />
                        </span>
                      }
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Nav fill variant="tabs" defaultActiveKey="/home" className="headnavs">
              <Nav.Item>
                <Nav.Link href="/membership">Membership</Nav.Link>
              </Nav.Item>
               <Nav.Item>
                <Nav.Link href="/training">Training</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/store">Store</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/consulting">Consulting</Nav.Link>
              </Nav.Item>
              <Nav.Item>
             
                    {user && <Button variant="outline-primary" onClick = { handleLogOut }>LogOut</Button>}
               
                    {!user && <Button variant="outline-primary" href="/login">Login</Button>}
                  
              </Nav.Item>
            </Nav>
          </div>
        );
}


export default Navibar;