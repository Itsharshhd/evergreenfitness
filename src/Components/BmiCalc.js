import React from "react";
import {useState} from 'react';
import {Form, Container,Button} from 'react-bootstrap';


const BmiCalc=()=>{

	const [height,setHeight] = useState("");
	const [weight, setWeight] = useState("");
	const [bmi,setBMI] = useState(0);
	const [para,setPara] = useState("")



	function CalculateBMI(){
		setBMI(Number(Number(weight)/(Number(height)*Number(height))));
		const talk = checkCondition();
		setPara(talk);
	}

	function checkCondition(){
		const talks = ["Need to loose some weight buddy, Join us now","Well maintianed, keep it up.","Join our Membership with Diet consultancy now! We need to get started..."]
		if(bmi>25.0){
			return (talks[0])
		}
		else if(bmi>18.5&&bmi<24.9){
			return (talks[1])
		}
		else{
			return (talks[2])
		}
	}
	function Reset(){
		setHeight("");
		setWeight(0);
		setPara("");
		setBMI(0);
	}
	return(
		<div>
			<h2>BMI Calculator</h2>
			<Container>
					<Form.Control type="text" placeholder="Enter your Height(in m)" value={height}
					 onChange={(e)=>setHeight(e.target.value)} />
					 <Form.Control type="text" placeholder="Enter your Weight(in kg)" vlaue={weight}
					 onChange={(e)=>setWeight(e.target.value)} />
					 <Button variant="outline-primary" onClick={CalculateBMI}>Calculate BMI</Button>
					 <Button variatn="outline-danger" onClick={Reset}>Reset</Button>
			</Container>

			<h3>Your Body Mass Index is: {bmi.toFixed(2)}</h3>
			<p>{para}</p>
		</div>
	)
}

export default BmiCalc;