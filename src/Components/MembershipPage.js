import React from 'react';
import '../Styles/Membership.css';
import Card from 'react-bootstrap/Card';
import { CardGroup, Accordion} from 'react-bootstrap';
import {MemImgGrid, MemEnrollGrid} from './ImageGrid';
const MembershipPage = () =>{
    return(
        <div className="membership-page-background">
              <div style={{display:'flex', justifyContent:'center'}}>
              
           <Card style={{margin: 0, background:'inherit',display: 'flex', flexWrap: 'wrap', justifyContent: 'center',height: '30rem', width: '70%'}} >
             <Card.Title style={{alignSelf: 'center', color: 'white'}} > Wellness Center and Gym Membership</Card.Title>
             <Card.Text style={{color: 'white'}}>
Evergreen fitness is more than a gym. We’re a goal-oriented, science-fuelled training and wellness center with no hidden fees and no long-term contracts — just a commitment to improving the health and fitness of anyone ready to walk through our doors. Our memberships are straightforward, hassle-free, and accessible to individuals, couples, and families alike.
             </Card.Text>
            </Card>
            </div>

              <MemImgGrid />

              <CardGroup>

<Card border="info" style={{ width: '18rem', margin:'2rem', borderRadius: '15px', backgroundColor: 'yellow' }}>
   <Card.Body>
     <Card.Title>50% OFF</Card.Title>
    <Card.Text>
     your first 60 minute massage
    </Card.Text>
   </Card.Body>
</Card>
<Card border="info" style={{ width: '18rem', margin:'2rem' , borderRadius: '15px', backgroundColor: 'yellow'  }}>
   <Card.Body>
     <Card.Title>20% OFF</Card.Title>
    <Card.Text>
     your first chiropractic evaluation
    </Card.Text>
   </Card.Body>
</Card>
<Card border="info" style={{ width: '18rem', margin:'2rem' , borderRadius: '15px', backgroundColor: 'yellow'  }}>
   <Card.Body>
     <Card.Title>1 Free</Card.Title>
    <Card.Text>
     Training Session
    </Card.Text>
   </Card.Body>
</Card>
</CardGroup>



<h2 style={{textAlign: 'center', color: 'orangered'}}>No more Excuses - Its's time to <br /> Challenge Yourself. </h2>

              <MemEnrollGrid />

              <Accordion flush>
              <Accordion.Item eventKey='0'>
                  <Accordion.Header style={{textAlign: 'center',color:'orangered'}}>I am Evergreen</Accordion.Header>
                  <Accordion.Body>
                      If you are looking for a place to transform yourself, this is the gym you need to be at.
                  </Accordion.Body>
               </Accordion.Item>
               </Accordion>

          
        </div>
    );
}

export default MembershipPage;