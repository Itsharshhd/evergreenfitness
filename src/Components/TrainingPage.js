import React from 'react';
import '../Styles/Training.css';
import {Row, Col, Container, Stack, Image} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const TrainingPage = () =>{
    return(
        <div className='training-page-background'>
           <div style={{display:'flex', justifyContent:'center'}}>
              
              <Card style={{margin: 0, background:'inherit',display: 'flex', flexWrap: 'wrap', justifyContent: 'center',height: '30rem', width: '70%'}} >
                <Card.Title style={{alignSelf: 'center', color: 'yellow'}} > Training Made Personal</Card.Title>
                <Card.Text style={{color: 'yellow'}}>
                Whether one-on-one personal training, small group training, or customized online training programs, experience a personal fitness workout with one of our certified personal trainers — each one devoted to redefining how you feel both inside and out. It’s fitness that fits your lifestyle.
                </Card.Text>
               </Card>
            </div>
            <Container>
            
                <Row  xs={1} md={2} className="g-4" >
                    <Col>
                    <Image fluid src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Personal%20Training.jpg?alt=media&token=62f93e2a-7e5e-4599-9110-204c459770ce' 
                    style={{borderRadius: '20px',margin: '1rem'}}
                    />
                    </Col>
                    <Col style={{color:'orangered',display: 'flex', alignItems: 'center', backgroundColor: '#343a40', borderRadius: '20px', height: '18rem' }}>
                   <div>
                    <h3 style={{textAlign:'center'}}>Personal Training</h3>
                    <p>
                    There’s personal training, and then there’s the customized personal training programs from Evergreen fitness & Wellness Center. Our knowledge of physiology and nutrition — combined with our experience in “fitness wisdom” — means even the most ambitious goals get met.
                    </p>
                    </div>
                    </Col>
                </Row>
                
                
                <Row  xs={1} md={2} className="g-4" >
                    <Col style={{color:'orangered',display: 'flex', alignItems: 'center' , backgroundColor: '#343a40', borderRadius: '20px', height: '18rem' }}>
                    <div>
                    <h3 style={{textAlign:'center'}}>Small Group Training</h3>
                    <p>
                    Customized training programs for up to five people with similar fitness goals, small group training blends one-on-one personal training with group exercise, allowing participants to reap the benefits of personal instruction at a fraction of the cost.
                    </p>
                    </div>
                   </Col>
                    <Col>
                    <Image fluid src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Small%20group%20Training.jpg?alt=media&token=ea9ca555-7136-4aee-8dad-6987592cc27a' 
                    style={{borderRadius: '20px',margin: '1rem',marginLeft: '0'}}
                    />
                    </Col>
                </Row>
                
                
                <Row  xs={1} md={2} className="g-4" >
                    <Col>
                    <Image fluid src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Online%20Training.jpg?alt=media&token=c5bd9626-dd10-478a-a35e-a20aafd9d2f7' 
                    style={{borderRadius: '20px',margin: '1rem'}}
                    />
                    </Col>
                    <Col style={{color:'orangered',display: 'flex', alignItems: 'center', backgroundColor: '#343a40', borderRadius: '20px', height: '18rem'  }}>
                    <div>
                    <h3 style={{textAlign:'center'}}>Online Training</h3>
                    <p>
                    Customized training at your convenience, online personal training is a comprehensive fitness solution for those who just can’t make it to the gym. Exercise anytime, anywhere with a series of individualized cardio and strength training workouts — and a nutrition plan to boot.
                    </p>
                    </div>
                    </Col>
                </Row>
                
            </Container>
            <div>
                <h2 style={{textAlign: 'center', color: 'white'}}>Meet Our Friendly Staff of Fitness Professionals</h2>
                <Container>
                   <Row>
                      <Col sm={5} style={{display: 'flex', justifyContent:'flex-end'}}>
                          <Image src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Sachin%20bansal.jpg?alt=media&token=32e778b7-316c-4edf-baeb-4336fa5de950' alt="professional's propic" 
                          style={{border:'2px solid red',margin:'1rem', height:'20rem', width: '20rem'}}
                          />
                      </Col>
                      <Col sm={6} style={{color: 'yellow', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                          <div>
                          <p>
                          <h3>Sachin Bansal</h3>
                          <ul>
                              <li>Lead fitness advisor - Male</li>
                              <li>Experience of 13+ years</li>
                          </ul>
                          </p>
                          </div>
                      </Col>
                   </Row>
                   <Row>
                      <Col sm={5} style={{display: 'flex', justifyContent: 'flex-end'}}>
                          <Image fluid src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Suchita%20Joshi.jpg?alt=media&token=75500f46-428b-4bcd-ab7e-a5e71303231f' alt="professional's propic" 
                          style={{border:'2px solid red',margin:'1rem', height:'20rem', width: '20rem'}}
                          />
                      </Col>
                      <Col sm={6} style={{color: 'yellow', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                          <div>
                          <p>
                          <h3>Suchita Joshi</h3>
                          <ul>
                              <li>Lead fitness advisor - Female</li>
                              <li>Experience of 9+ years</li>
                          </ul>
                          </p>
                          </div>
                      </Col>
                   </Row>
                </Container>
            </div>
            <div>
                <h2 style={{textAlign: 'center', color: 'white'}}>Our Team of Health & Fitness</h2>
                <Stack direction="horizontal" gap={3} style={{justifyContent:'center'}}>
                    <div>
                        <Image roundedCircle src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Neha%20Sharma.jpg?alt=media&token=b125e9af-854c-4315-8eb4-2b8b4eb2d3db' alt='profileImage' 
                        style={{height: '10rem', width: '10rem'}} 
                        />
                        <h4 style={{color: 'orangered'}}>Neha Sharma</h4>
                    </div> 
                    <div>
                        <Image roundedCircle src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Ravi%20Yadav.jpg?alt=media&token=459d4b35-1b73-46a4-b2c9-dad4c7984de2' alt='profileImage' 
                        style={{height: '10rem', width: '10rem'}} 
                        />
                        <h4 style={{color: 'orangered'}}>Ravi Yadav</h4>
                    </div> 
                    <div>
                        <Image roundedCircle src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/nitin%20vyas.jpg?alt=media&token=cef76535-b4d1-4760-b656-0f20580a4466' alt='profileImage' 
                        style={{height: '10rem', width: '10rem'}} 
                        />
                        <h4 style={{color: 'orangered'}}>Nitin Vyas</h4>
                    </div>
                </Stack>
                <Stack direction="horizontal" gap={3} style={{justifyContent:'center'}}>
                    <div>
                        <Image roundedCircle src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Vidhya%20Kasturi.jpg?alt=media&token=30439335-683f-4bf1-94a8-4368dae71f53' alt='profileImage' 
                        style={{height: '10rem', width: '10rem'}} 
                        />
                        <h4 style={{color: 'orangered'}}>Vidya Kasturi</h4>
                    </div> <div>
                        <Image roundedCircle src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Ritu%20Gade.jpg?alt=media&token=d3dbd38d-7804-4ec6-8ca7-20ba2914ba1a' alt='profileImage' 
                        style={{height: '10rem', width: '10rem'}} 
                        />
                        <h4 style={{color: 'orangered'}}>Ritu Gade</h4>
                    </div> <div>
                        <Image roundedCircle src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Ankur%20Malya.jpg?alt=media&token=6e697e8c-ff44-425f-b5eb-84e0dd0c1b4b' alt='profileImage' 
                        style={{height: '10rem', width: '10rem'}} 
                        />
                        <h4 style={{color: 'orangered'}}>Ankur Malya</h4>
                    </div>
                </Stack>
            </div>
        </div>
    );
}

export default TrainingPage;