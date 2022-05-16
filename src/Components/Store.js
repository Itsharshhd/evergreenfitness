import React from 'react';
import {useState, useEffect} from 'react';

import {useNavigate} from 'react-router-dom';
import { StoreCarousel } from './ImageGrid';

import {Card, Col, Row, Button, Alert, Image} from 'react-bootstrap';
import ProductDataService from "../services/product.services";
import UserDataService from "../services/user.services";

import {useUserAuth} from '../context/Auth';


const StoreGrid = () => {
    let navigate = useNavigate();
    const {user} = useUserAuth();

     const [productId, setProductId] = useState("");
     const [productName,setProductName] =useState();
     const [price,setPrice] = useState();
     const [url,setURL] = useState();
     const [myorder,setMyOrder] = useState([]);
     const [message, setMessage] = useState({ error: false, msg: "" });

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

    const getProducts = async () => {
    const data = await ProductDataService.getAllProducts();
    console.log(data.docs);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // const handleBuyNow = async(name,price)=>{
  //   if(user!==null){
  //   const docSnap = await UserDataService.getUser(user.uid);
  //   setMyOrder(docSnap.data().order);
  //   let orders = [...myorder, name];
  //   setProductName(name);
  //   setPrice(price);
  //   await UserDataService.updateUser(user.uid, {orders,productName,price});
  //   setMessage({ error: false, msg: "New Product added successfully!" })
  //   }else{
  //       navigate('/login');
  //   }
  // }

    return(
        <div>
{message&&message.msg && (
          <Alert
            variant={message&&message.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message&&message.msg}
          </Alert>
        )}
      
       <Row xs={1} md={2} className="g-4" style={{backgroundColor:'#343a40',padding:"5rem"}}>

       {products.map((doc, index) => {
            return (
    <Col>
     

      <Card style={{display:'flex', justifyContent:'center',alignItems:'center', padding:'2rem'}}>
        <Card.Img variant="top" src={doc.url} 
        style={{border: '2px solid orangered', height: '25rem', width: '25rem', margin:'5rem'}}
        />
        <Card.Body>
            <Card.Title style={{textAlign:'center'}}>{doc.name}</Card.Title>
            <Card.Text style={{backgroundColor:"orangered",textAlign:'center', width:'5rem'}}>
                {doc.price} Rs
            </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-primary" href="/payment">Buy Now</Button>
          
        </Card.Footer>
      </Card>
    </Col>
       );
          })}
</Row>
       
        </div>


    );
}

const Store = () =>{
    return(
        <div>
            <main>
                <StoreCarousel />
                <h2 style={{margin: '3rem', textAlign:'center'}}>Welcome to Supplement Store</h2>
                <StoreGrid />
                <span style={{display:'flex', justifyContent:'center'}}><h1 style={{border:"3px solid red",borderRadius:'15%',lineHeight:"2rem", textAlign:'center',margin:'5rem', width:"50%", padding:'2rem'}}>Popular Brands</h1></span>
                <Image src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/IMG_20220516_160805.jpg?alt=media&token=dc8cf4f0-093d-4052-a71c-bddcc794cddc" />
                
            </main> 
        </div>
    );
        
}

export default Store;


