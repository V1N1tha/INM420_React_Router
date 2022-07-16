 import contactmap from '../assets/images/Map.jpeg';
  

 export default function Contact() {
    return (
      <main>
        <h1>Contact Us</h1>
        <div className="contactcontainer">
           <div className="mapimage">
            <img src={contactmap} alt="Tasty Bakery Location" />  
          </div>
          
          <div className="contacttext">
            <h2> TASTY BAKERY Customer Support</h2>
            <h4> 24/7 Customer Service for you!</h4>
            <p> 1288, Clark Road, Toronto. </p>
            <p> tastybakerycs@tastybakery.com </p>
            <p> 7781872647, 77812674990</p>

          </div>
        </div>
        
      </main>
    );
  }