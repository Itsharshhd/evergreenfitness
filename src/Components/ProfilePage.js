import React from 'react';
import {useState, useEffect, useRef} from 'react';
import UserDataService from "../services/user.services";
import fitnessStorage from "../firebase/config";
import app from "../firebase/config";
import {updateProfile} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import {Link} from 'react-router-dom';

import {Container, Row, Col} from 'react-bootstrap';
import { Tab } from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import { ListGroup, Image } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
// import Cart from './Cart';
// import Orders from './Orders';
import { ExercisesGrid } from './ImageGrid';
import BmiCalc from './BmiCalc';

import {useUserAuth} from '../context/Auth';


const ProfilePage = () =>{

    const { user } = useUserAuth();
    const [photo, setPhoto] = useState(null);

    const [error, setError] = useState('');
    const [name, setName] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [age, setAge] = useState();
    const [goal, setGoal] = useState();
    const [address, setAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState(user.email);
    const [displayName, setDisplayName] = useState();
    const [gender, setGender] = useState();
    const [photoURL, setPhotoURL] = useState();
    const [validity, setValidity] = useState();

    // const photoPickerRef = useRef();
    // photoPickerRef.current.click();

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
      setGender(docSnap.data().gender);
      setValidity(docSnap.data().validity);
      setPhoneNumber(docSnap.data().phoneNumber);
      setDisplayName(docSnap.data().displayName);
      setPhotoURL(docSnap.data().photoURL);
    } catch (err) {
      setError(error);
    }
}




 // useEffect(()=>{
 //    console.log("photoURL:", photoURL);
 //     if (user.photoURL) {
 //      setPhotoURL(user.photoURL);
 //    }
 // },[user])

  useEffect(() => {
    console.log("The id here is : ", user.uid);
    if (user.uid !== undefined && user.uid !== "") {
      fetchData();
    }
},[user.uid])


   const handlePropicselect = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  };
  // const storageRef = app.fitnessStorage.ref(photo.name);
   // const url = await storageRef.getDownloadURL();
 // await UserDataService.updateUser(user.uid,{photoURL});

const handlePropic = async (e)=>{
    e.preventDefault();
        setError("");
        try{
            
                const fileRef = ref(app.fitnessStorage, user.uid + '.png');
                const snapshot = await uploadBytes(fileRef, photo);
                const photoURL = await getDownloadURL(fileRef);

                updateProfile(user, {photoURL});
                await UserDataService.updateUser(user.uid,{photoURL});
           
        }catch(err){
            setError(err.message);
        }
    
}



    return(
        <div>
            
               
                <Row>
                      <Col xs={4} md={3} style={{ backgroundColor:'#343a40' }}>
                        <aside style={{margin: '1rem', padding:''}}>
                        <div style={{display:'flex', justifyContent:'center'}}>
                        <div>
                      
                            <Image roundedCircle src={photoURL} alt="propic"
                            style={{height: '10rem', width: '10rem'}} 
                            />

                    
                            


                        { photoURL=== "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"                    
                         && <div>
                              <Form onSubmit={handlePropic}>              
                           
                                
                                 <Form.Group className="mb-3" style={{height: "2rem", width: "4rem",opacity: '0.6'}}>
                               
                                 <Form.Control type="file" placeholder="Choose a propic" required
                                 onChange={handlePropicselect} 
                                 
                                 />
                                
                                 </Form.Group>
                       
                                <Button variant="outline-primary" type="submit">Upload propic</Button>
                                    </Form>        
                            </div>
                        }
                            <h5 style={{textAlign:'center', marginTop:'1rem', color:'white'}}>{displayName}</h5>
                        </div>
                        </div>
                            <ListGroup style={{border:'4px solid azure', padding:'1rem', marginTop:'2rem'}}>
                                <ListGroup.Item action variant="primary" style={{marginTop:'2rem'}}>
                                    Details:
                                </ListGroup.Item>
                                <ListGroup.Item action variant="light" style={{marginTop:'2rem'}}>
                                    Name: {name}
                                </ListGroup.Item>
                                <ListGroup.Item action variant="light" style={{marginTop:'2rem'}}>
                                    Age: {age}
                                </ListGroup.Item>
                                <ListGroup.Item action variant="light" style={{marginTop:'2rem'}}>
                                    Weight: {weight} kg
                                </ListGroup.Item>
                                <ListGroup.Item action variant="light" style={{marginTop:'2rem'}}>
                                    Height: {height} cm
                                </ListGroup.Item>
                                <ListGroup.Item action variant="light" style={{marginTop:'2rem'}}>
                                    Goal: {goal}
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" style={{marginTop:'2rem'}}>
                                    Membership Validity:
                                </ListGroup.Item>
                                <ListGroup.Item action variant="dark" style={{marginTop:'2rem'}}>
                                    {validity} months
                                </ListGroup.Item>
                                <ListGroup.Item action variant="info" style={{marginTop:'3rem'}}>
                                    Contact Information:
                                </ListGroup.Item>
                                <ListGroup.Item action variant="info" style={{marginTop:'2rem'}}>
                                    Email: {user.email}
                                </ListGroup.Item>
                                <ListGroup.Item action variant="info" style={{marginTop:'2rem',marginBottom: '2rem'}}>
                                    Contact Number: {phoneNumber}
                                </ListGroup.Item>
                            </ListGroup>


                            <div style={{ marginTop: '3rem', display: 'flex', justifyContent:'center'}}>
                            <Link to="/register"><Button  variant="outline-primary">Edit Profile</Button></Link>
                            </div>
                      
                        </aside>

                    </Col>
                        <Col xs={12} md={9}>
                        <main>
                            <div style={{height: '50rem', marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:'azure'}}>
                                <h2 style={{margin: '1rem'}}>Today's Exercises</h2>
                                <ExercisesGrid />
                            </div>
                            <div>
                            <Row style={{backgroundColor:'#343a40', color:'white'}}>
                                <h2 style={{margin:"3rem", textAlign:'center'}}>Today's Diet</h2>
                            </Row>
                            <Row style={{display:'flex',justifyContent:'center',backgroundColor:'orangered'}}>
                                <div style={{height:'10rem',width:'15rem', margin:'5rem'}}>
                                <h3>Protein: 125gm(required)</h3>
                                <ListGroup>
                                    <ListGroup.Item action variant="light">
                                       whey protein
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                         Chicken Breast
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                       egg whites
                                    </ListGroup.Item>
                                </ListGroup>
                                </div>
                                <div style={{height:'10rem',width:'15rem', margin:'5rem'}}>
                                <h3>Carb: 200gm(required)</h3>
                                <ListGroup>
                                    <ListGroup.Item action variant="light">
                                        Roti
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                        Bread
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                        Sweet Potato
                                    </ListGroup.Item>
                                </ListGroup>
                                </div>
                                <div style={{height:'10rem',width:'15rem', margin:'5rem'}}>
                                <h3>Fats: 40gm(required)</h3>
                                <ListGroup>
                                    <ListGroup.Item action variant="light">
                                        Avocado
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                        Nuts
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                        Egg yolk
                                    </ListGroup.Item>
                                </ListGroup>
                                </div>
                            </Row>
                            </div>
                            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:"50rem", backgroundColor:'#343a40', color: 'white'}}>
                                <BmiCalc />
                            </div>
                        </main>

                    </Col>
                    </Row>
                

            
        </div>
    );
}

export default ProfilePage;