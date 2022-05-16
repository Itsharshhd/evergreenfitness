import React from 'react';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import {Row, Col, Button} from 'react-bootstrap';

const Gallery = () => {
    return(
        <div style={{backgroundColor: '#343a40', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <h2 style={{color: 'orangered'}}>Gallery</h2>
            <Row xs={1} md={2} className="g-4">
  
    <Col>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Treadmills.jpeg?alt=media&token=a60b102b-50f4-4b80-9fc5-661defbb010b"
        style= {{ borderRadius: 15, border: 'solid orangered', height: '25rem'}} 
        />
      </Card>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/gall_img1.jpeg?alt=media&token=4941a1af-9d99-4e7e-830d-7addf76a24dd"
        style= {{ borderRadius: 15, border: 'solid orangered', height: '25rem'}} 
        />
      </Card>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/supplements%20available%20offline%202.jpeg?alt=media&token=3ac53ec2-0328-479c-8602-6923b8eb882d"
        style= {{ borderRadius: 15, border: 'solid orangered', height: '25rem'}} 
        />
      </Card>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/gall_img4.jpeg?alt=media&token=3fb6fd3a-0d01-42f5-8a87-b7ceff339320"
        style= {{ borderRadius: 15, border: 'solid orangered', height: '25rem'}} 
        />
      </Card>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/juice%20parler.jpeg?alt=media&token=560115d8-fb58-4087-9451-926d162ae58d"
        style= {{ borderRadius: 15, border: 'solid orangered', height: '25rem'}} 
        />
      </Card>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/gall_img5.jpeg?alt=media&token=eb334fb4-9086-40d8-a014-95c037d90f80"
        style= {{ borderRadius: 15, border: 'solid orangered', height: '25rem'}} 
        />
      </Card>
      </Col>
      <Col>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/cardio%20area.jpeg?alt=media&token=1bff4984-2f06-4055-979c-15b620b83294"
        style= {{ borderRadius: 15, border: 'solid orangered', height: '25rem'}} 
        />
      </Card>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/gall_img2.jpeg?alt=media&token=6c05e30a-99b4-445d-8132-82d1d9a487cc"
        style= {{ borderRadius: 15, border: 'solid orangered' , height: '25rem'}} 
        />
      </Card>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/gall_img6.jpeg?alt=media&token=ed44011d-4212-4943-b653-2633620fac24"
        style= {{ borderRadius: 15, border: 'solid orangered' , height: '25rem'}} 
        />
      </Card>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/suppliments%20available%20offline.jpeg?alt=media&token=d20a65f1-bb85-4dab-b606-de94a0aaba6c"
        style= {{ borderRadius: 15, border: 'solid orangered' , height: '25rem'}} 
        />
      </Card>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/gall_img.jpeg?alt=media&token=814c2f14-6a5d-45a4-9379-3bd6d637e822"
        style= {{ borderRadius: 15, border: 'solid orangered' , height: '25rem'}} 
        />
      </Card>
      <Card style={{background:'inherit',margin:'3rem'}}>
        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/gall_img3.jpeg?alt=media&token=26cab1b3-2682-42e2-ac04-05ff1e3bc865"
        style= {{ borderRadius: 15, border: 'solid orangered' , height: '25rem'}} 
        />
      </Card>
    </Col>
</Row>
        </div>
    );
}

const StoreCarousel = () => {
  return(
    <div>
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/1.jpg?alt=media&token=eb8d1c95-ce93-49cc-99fb-de1f0b985789"
      alt="First slide"
      style={{height: '30rem'}}
    />
    {/* <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/2.jpg?alt=media&token=79f75320-a3cf-4552-95c6-9cd385e6dcaa"
      alt="Second slide"
      style={{height: '30rem'}}
    
    />
    {/* <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/3.jpg?alt=media&token=a5a983a3-ba95-4e38-9aae-67d5308af244"
      alt="Second slide"
      style={{height: '30rem'}}
    />
    {/* <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/4.jpg?alt=media&token=c8b37bc9-6d4d-4b1d-9755-a10aa6d92ce1"
      alt="Third slide"
      style={{height: '30rem'}}
    />
    {/* <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
    </div>
  )
}

const MemImgGrid = () => {
    return(
      <div>
      <Row  xs={1} md={2} className="g-4" >
        
          <Col>
            <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Treadmills.jpeg?alt=media&token=a60b102b-50f4-4b80-9fc5-661defbb010b" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
              
                <Card.Title style={{color:'whitesmoke', textAlign: 'center'}}>Trademills</Card.Title>
                </Card>
           
            <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/free%20weights.jpg?alt=media&token=65e9bb49-1654-4067-a23f-02a13fcc7db3" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
              <Card.Body>
                <Card.Title style={{color:'whitesmoke', textAlign: 'center'}}>Free Weights</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/machine%20weights.jpg?alt=media&token=3375417e-2bf8-4823-bec2-1648c87f9ee5" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
              <Card.Body>
                <Card.Title style={{color:'whitesmoke', textAlign: 'center'}}>Machine Weights</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/spartan%20rack.jpg?alt=media&token=df4a80c1-2b4b-4988-92f8-98fbf05ed39d" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
              <Card.Body>
                <Card.Title style={{color:'whitesmoke', textAlign: 'center'}}>Spartan Rack</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/locker%20room.jpg?alt=media&token=e16a68ef-d09e-4742-b04c-03b2478f9fcb" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
              <Card.Body>
                <Card.Title style={{color:'whitesmoke', textAlign: 'center'}}>Locker Room</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ background:'inherit', border: 'dashed'}} >
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/logo.jpeg?alt=media&token=1ec7e7cd-97d1-4a4e-a9d7-9abe0aaeceb9" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem', opacity: 0.6}}
               />
              <Card.Body>
                <Card.Title style={{color:'whitesmoke', textAlign: 'center', opacity: 0.9}}>Evergreen &rarr;<br />There is more, get membership to see it</Card.Title>
              </Card.Body>
            </Card>
          </Col>
      
      </Row>
      </div>
    );
}

const MemEnrollGrid = () =>{
    return(
       <div>


        <Row  xs={1} md={2} className="g-4" >
          <Col>
          <Card style={{backgroundColor: 'azure', border: '3px solid black', borderRadius: '20%', textAlign:'center', margin: '2rem'}}>
              <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Monthly Plan &rarr;</Card.Title>
                <Card.Text>
           <p>1500$</p>
           <p>Validity: 1 month</p>
           <p>Benefits:</p>
           <ul>
           <li>Access to all equipment</li>
               <li>Canteen Access</li>
               <li>Discontinous counting of validity</li>
               <li>Personal training free for 4 months</li>
               <li>Steam Room</li>
               <li>EMI option available</li>
               <li>Free cardio</li>
           </ul>
           <a href="/payment"> <Button variant="primary">Enroll</Button></a>
                </Card.Text>
              </Card.Body>
            </Card >
            <Card style={{backgroundColor: 'azure', border: '3px solid black', borderRadius: '20%', textAlign:'center', margin: '2rem'}}>
              <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Quaterly Plan &rarr;</Card.Title>
                <Card.Text>
           <p>3500$</p>
           <p>Validity: 3 months</p>
           <p>Benefits:</p>
           <ul>
           <li>Access to all equipment</li>
               <li>Canteen Access</li>
               <li>Discontinous counting of validity</li>
               <li>Personal training free for 4 months</li>
               <li>Steam Room</li>
               <li>EMI option available</li>
               <li>Free cardio</li>
           </ul>
           <a href="/payment"> <Button variant="primary">Enroll</Button></a>
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{backgroundColor: 'azure', border: '3px solid black', borderRadius: '20%', textAlign:'center', margin: '2rem'}}>
              <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Two Seasons Plan &rarr;</Card.Title>
                <Card.Text>
                <h3>2 seasons plan &rarr;</h3>
           <p>7000$</p>
           <p>Validity: 6 months</p>
           <p>Benefits:</p>
           <ul>
           <li>Access to all equipment</li>
               <li>Canteen Access</li>
               <li>Discontinous counting of validity</li>
               <li>Personal training free for 4 months</li>
               <li>Steam Room</li>
               <li>EMI option available</li>
               <li>Free cardio</li>
           </ul>
           <a href="/payment"> <Button variant="primary">Enroll</Button></a>
                </Card.Text>
              </Card.Body>
            </Card>
          <Card style={{backgroundColor: 'azure', border: '3px solid black', borderRadius: '20%', textAlign:'center', margin: '2rem'}}>
              <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Annual plan &rarr;</Card.Title>
                <Card.Text>
                <p>12000$</p>
           <p>Validity: 12 months</p>
           <p>Benefits:</p>
           <ul>
               <li>Access to all equipment</li>
               <li>Canteen Access</li>
               <li>Discontinous counting of validity</li>
               <li>Personal training free for 4 months</li>
               <li>Steam Room</li>
               <li>EMI option available</li>
               <li>Free cardio</li>
           </ul>
           <a href="/payment"> <Button variant="primary">Enroll</Button></a>
                </Card.Text>
              </Card.Body>
            </Card>
            
          </Col>
        </Row>
    </div>
    )
}

const ExercisesGrid = () =>{
  return(
    <div>
       <Row  xs={1} md={3} className="g-4" >
        
            <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Screenshot_2022-05-13-14-42-02-36_b840b4c1e59d6e649369ed88e087aa0a-01.jpeg?alt=media&token=e76e17e8-0c0e-4934-80ac-687804ef787d" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
             <Card.Title style={{ textAlign: 'center'}}>Push ups</Card.Title>
                </Card>
           
            <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Screenshot_2022-05-13-14-41-56-39_b840b4c1e59d6e649369ed88e087aa0a-01.jpeg?alt=media&token=0fed9c7d-a5b5-484e-94fb-7487ca060816" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center'}}>Cable Crossover Fly</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Screenshot_2022-05-13-14-41-52-61_b840b4c1e59d6e649369ed88e087aa0a-01.jpeg?alt=media&token=510060cf-8267-4c0e-8db2-2ca9b52c500a" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center'}}>Parallel Bar Dips</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Screenshot_2022-05-13-14-41-48-08_b840b4c1e59d6e649369ed88e087aa0a-01.jpeg?alt=media&token=8497f255-0f06-4b5f-860e-a9f1344796fc" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center'}}>Inclined Dumbell Press</Card.Title>
              </Card.Body>
            </Card>
             <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Screenshot_2022-05-13-14-41-44-49_b840b4c1e59d6e649369ed88e087aa0a-01.jpeg?alt=media&token=822db5e8-709d-4413-aa57-6b61fa6b08b7" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
              <Card.Body>
                <Card.Title style={{ textAlign: 'center'}}>Inclined Bench Press</Card.Title>
              </Card.Body>
            </Card>
             <Card style={{background:'inherit'}}>
              <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Screenshot_2022-05-13-14-41-40-63_b840b4c1e59d6e649369ed88e087aa0a-01.jpeg?alt=media&token=ee3aaf39-62d3-4371-8c32-2bf5f04fd2ba" 
               style= {{ borderRadius: 15, border: 'solid orangered' , height: '20rem'}}
               />
              <Card.Body>
                <Card.Title style={{textAlign: 'center'}}>Flat Bench Press</Card.Title>
              </Card.Body>
            </Card>
      </Row>
    </div>
  )
}

export { Gallery, StoreCarousel, MemImgGrid, MemEnrollGrid, ExercisesGrid };