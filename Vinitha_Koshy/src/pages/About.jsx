 import aboutimage from '../assets/images/AboutUs.png';
 import about from '../assets/images/About.png';
 

 export default function About() {
    return (
      <main>
         <div className="homecontainer">
          <div className="bakeryimage">
            <img src={aboutimage} alt="Tasty Bakery" />  
          </div>
          <div className="bakerytext">
            <h2> ABOUT OUR TASTY BAKERY HISTORY</h2>
            <p className="left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie ipsum in massa tristique, at cursus dui auctor. Donec lorem nisi, dapibus ac elementum ac, consectetur eu odio. Phasellus sed elit tellus. Phasellus mauris metus, cursus eget mollis eget, malesuada a nunc. Ut vitae neque nisl. Suspendisse id ante lectus. In vel purus ac mauris facilisis scelerisque.
              Nulla bibendum blandit bibendum. Nullam fermentum non tellus porta vulputate.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie ipsum in massa tristique, at cursus dui auctor. Donec lorem nisi, dapibus ac elementum ac, consectetur eu odio. Phasellus sed elit tellus. Phasellus mauris metus, cursus eget mollis eget, malesuada a nunc. Ut vitae neque nisl. Suspendisse id ante lectus. In vel purus ac mauris facilisis scelerisque.
              Nulla bibendum blandit bibendum. Nullam fermentum non tellus porta vulputate.</p>

            <div className="about"> 
             <img src={about} alt="Tasty Bakery" /> 
            </div>

          </div>

          

        </div>
      </main>
    );
  }