import React from 'react';
import Card from 'react-bootstrap/Card';
import {Gallery} from './ImageGrid';


const Home = () => {
    return (
      <div>
       <main>
        <article>
          <Card className="bg-dark text-white">
            <Card.Img src="https://firebasestorage.googleapis.com/v0/b/evergreen-fitness.appspot.com/o/Home%20page%20B.I.jpg?alt=media&token=c3979e13-01bf-462b-8d0d-6afddc657cba" alt="Background Image" height="600px"/>
            <Card.ImgOverlay style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
             <Card.Title style={{alignSelf:'center'}} >About Us</Card.Title>
             <Card.Text>
                More than your average health club, Evergreen fitness and wellness club offers a wide range of goal-oriented, science-fuelled health and wellness services for those in pursuit of their full potential through functional fitness.
                From basic gym memberships to custom training programs; nutritional plans to chiropractic care and physiotherapy, we’re total wellness. 
             </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </article>
        <div>
            <Gallery />
        </div>
       </main>
      </div>
    );
  
}

export default Home;
