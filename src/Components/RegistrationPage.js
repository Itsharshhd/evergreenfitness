import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/Auth";

import UserDataService from "../services/user.services";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const RegistrationPage = () => {

		const { user } = useUserAuth();
	const navigate = useNavigate();


	const [error, setError] = useState('');
	const [name, setName] = useState();
	const [height, setHeight] = useState();
	const [weight, setWeight] = useState();
	const [age, setAge] = useState();
	const [goal, setGoal] = useState();
	const [address, setAddress] = useState();
	const [phoneNumber, setPhoneNumber] = useState();
	const [gender, setGender] = useState();
	const [validity, setValidity] = useState();
	const [orders,setOrders] = useState([]);
	const [productName, setproductName] = useState("Fast&upmultivitaminwithnaturalbeetrootextract");
	const [price,setPrice] = useState(309);
 

useEffect(()=>{
const fetchData= async ()=>{
    try {
      const docSnap = await UserDataService.getUser(user.uid);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setAge(docSnap.data().age);
      setHeight(docSnap.data().height);
      setWeight(docSnap.data().weight);
      setGoal(docSnap.data().goal);
      setAddress(docSnap.data().address);
      setPhoneNumber(docSnap.data().phoneNumber);
      setGender(docSnap.data().gender);
    } catch (err) {
      setError(error);
    }
}

},[user.uid])

const userData = {
	name,
	age,
	height,
	weight,
	goal,
	address,
	phoneNumber,
	gender,
	validity,
	orders,
	productName,
	price
}

 

	const handleRegister = async(e) =>{
		e.preventDefault();
		setError("");
		try{
			await UserDataService.updateUser(user.uid,userData);
			navigate('/profile');

		}catch(err){
			setError(err.message);
		}
	

	}


	return(

		

				<main style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{margin: '15rem', border: '1px solid orangered', padding: '2rem', width: '50%'}}>
            <h2 style={{textAlign:'center', color:'orangered', margin: '2rem'}}>Register</h2>
            {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
          	<Form.Control type="text" placeholder="Name" value={name}
    		onChange = {(e) => setName(e.target.value)}/>
  		  </Form.Group>
  		  <Form.Group className="mb-3" >
          	<Form.Control type="text" placeholder="Height(in cm)" value={height}
    		onChange = {(e) => setHeight(e.target.value)}/>
  		  </Form.Group>
  		  <Form.Group className="mb-3">
          	<Form.Control type="text" placeholder="Weight(in kg)" value={weight}
    		onChange = {(e) => setWeight(e.target.value)}/>
  		  </Form.Group>
  		  <Form.Group className="mb-3" >
          	<Form.Control type="text" placeholder="Age" value={age}
    		onChange = {(e) => setAge(e.target.value)}/>
  		  </Form.Group>
  		  
  		  <Form.Group className="mb-3" >
          	<Form.Control type="text" placeholder="What's your goal?" value={goal} 
    		onChange = {(e) => setGoal(e.target.value)}/>
  		  </Form.Group>
  		  
  		  <Form.Group className="mb-3" >
          	<Form.Control type="text" placeholder="Contact" value={phoneNumber}
    		onChange = {(e) => setPhoneNumber(e.target.value)}/>
  		  </Form.Group>
  		  
  		  <Form.Group className="mb-3" >
          	<Form.Control type="text" placeholder="Address" value={address}
    		onChange = {(e) => setAddress(e.target.value)}/>
  		  </Form.Group>

  		  <Form.Group className="mb-3" >
          	<Form.Control type="text" placeholder="Gender" value={gender}
    		onChange = {(e) => setGender(e.target.value)}/>
  		  </Form.Group>


   <Form.Group className="mb-3" >
          	<Form.Control type="text" placeholder="Membership for: " value={validity}
    		onChange = {(e) => setValidity(e.target.value)}/>
  		  </Form.Group>



  <Col style={{display:'flex', justifyContent: 'center'}}>
  <Button variant="primary" type="submit">
    Register
  </Button>
  </Col>
  
</Form>

			</div>
			</main>

		)
}

export default RegistrationPage;