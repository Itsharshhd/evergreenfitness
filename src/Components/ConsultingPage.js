import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import '../Styles/Consulting.css';

const ConsultingPage = () =>{
    return(
        <div className='consulting-page-background'>
         
           <div style={{display:'flex', justifyContent:'center'}}>
              
              <Card style={{margin: 0, background:'inherit',display: 'flex', flexWrap: 'wrap', justifyContent: 'center',height: '30rem', width: '70%'}} >
                <h2 style={{alignSelf: 'center', color: 'white'}} > Nutritional Counselling for a Healthier You</h2>
                <p style={{color: 'white'}}>
               Get evidence-based, accurate information and advice from our nutritionists on how to maintain better nutritional habits that you can easily adopt and adapt for the rest of your life. Think of it as another therapeutic approach to wellness — just one that uses a tailored diet and nutrition plan to support your fitness journey and help you reach your weight loss, strength training, or rehabilitation goals.
                </p>
               </Card>
            </div>
            <div>
                <Container>
                <Row  xs={1} md={2} className="g-4" >
                    <Col>
                    <Image fluid src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Help%20Starts%20here.jpg?alt=media&token=c8e35f41-cc15-41d3-b3f9-4c20c541e80f'
                    style={{margin: '1rem'}}
                    />
                    </Col>
                    <Col style={{color:'yellow',display: 'flex', alignItems: 'center', backgroundColor: '#343a40', borderRadius: '20px', height: '18rem' }}>
                    <div style={{textAlign: 'center'}}>
                    <h2>Help starts here</h2>
                    <p>
                        <h4>Nutritionists for Health and Fitness Planning</h4>Get evidence-based, accurate information and advice from our nutritionists on how to maintain better nutritional habits that you can easily adopt and adapt for the rest of your life. Think of it as another therapeutic approach to wellness — just one that uses a tailored diet and nutrition plan to support your fitness journey and help you reach your weight loss, strength training, or rehabilitation goals.
                    </p>
                    </div>
                    </Col>
                </Row>
                <Row  xs={1} md={2} className="g-4" >
               
                    <Col>
                    <Image fluid src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Chiropractic%20Care.jpg?alt=media&token=dde4b085-e951-41ba-a309-268d288b9828' 
                    style={{margin: '1rem'}}
                    />
                    </Col>
                    <Col style={{color:'yellow',display: 'flex', alignItems: 'center', backgroundColor: '#343a40', borderRadius: '20px', height: '18rem' }}>
                    <div style={{textAlign: 'center'}}>
                    <h2 >Chiropractic Care</h2>
                    <p>
                    Evergreen Fitness & Wellness Center understands the importance of an active lifestyle — a lifestyle that can be hindered by neck pain, back pain, and other acute or chronic issues. Our center offers treatment options for anyone in the area looking for a more personal, individualized solution to complete wellness.
                    </p>
                    </div>
                    </Col>
                
                </Row>
                <Row  xs={1} md={2} className="g-4" >
                
                    <Col>
                    <Image fluid src='https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Personal%20Training.jpg?alt=media&token=62f93e2a-7e5e-4599-9110-204c459770ce' 
                    style={{margin: '1rem'}}
                    />
                    </Col>
                    <Col style={{color:'yellow',display: 'flex', alignItems: 'center', backgroundColor: '#343a40', borderRadius: '20px', height: '18rem' }}>
                    <div style={{textAlign: 'center'}}>
                    <h2>Personal Training</h2>
                    <p>
                    Sixty minutes devoted to making the impossible possible. Our knowledge of physiology and nutrition — combined with our experience in “fitness wisdom” — allows us to create truly customized health and fitness programs to get you stronger, leaner, faster. Whatever your goals, the right trainer makes all the difference in your results.
                    </p>
                    </div>
                    </Col>
               
                </Row>
                </Container>
            </div>
         
        </div>
    );
}

export default ConsultingPage;