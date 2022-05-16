import React from 'react';
import {useState, useEffect} from 'react';

import  ListGroup  from 'react-bootstrap/ListGroup';
import  Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useUserAuth } from "../context/Auth";

import UserDataService from "../services/user.services";


const PaymentsPage = () =>{
    const { user } = useUserAuth();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [productName,setProductName] = useState();
    const [price, setPrice] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [error,setError] = useState();

    useEffect(()=>{
const fetchData= async ()=>{
    try {
      const docSnap = await UserDataService.getUser(user.uid);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setAddress(docSnap.data().address);
      setPhoneNumber(docSnap.data().phoneNumber);
      setProductName(docSnap.data().productName);
      setPrice(docSnap.data().price);
    } catch (err) {
      setError(error);
    }
}

},[user.uid])

    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10rem'}}>
            <Form style={{width: '50%'}}>
            <ListGroup>
            <ListGroup.Item action variant="info" style={{border:'none', marginBottom: '2rem'}}>
                Name:- {name}
            </ListGroup.Item>
             <ListGroup.Item action variant="info" style={{border:'none', marginBottom: '2rem'}}>
               Contact:- {phoneNumber}
            </ListGroup.Item>
            <ListGroup.Item action variant="info" style={{border:'none', marginBottom: '2rem'}}>
                Email:- {user.email}
            </ListGroup.Item>
            <ListGroup.Item action variant="info" style={{border:'none', marginBottom: '2rem'}}>
                Shipping Address:- {address}
            </ListGroup.Item>
            <ListGroup.Item action variant="light" style={{border:'none', marginBottom: '2rem'}}>
                Item Name:- {productName}
            </ListGroup.Item>
            <ListGroup.Item action variant="light" style={{border:'none', marginBottom: '2rem'}}>
                Total Amount to be paid:- {price}
            </ListGroup.Item>
            </ListGroup>
            <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
            <Button variant="primary" type="submit" href="/profile">
                   Click to Pay
            </Button>
            <Button variant="primary" type="submit">
                   Cancel
            </Button>
            </div>
            </Form>
            </div>
        </div>
    );
}

export default PaymentsPage;