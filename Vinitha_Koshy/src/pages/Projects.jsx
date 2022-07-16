 import projectone from '../assets/images/Project_1.png';
 import projecttwo from '../assets/images/Project_2.png';
 import projectthree from '../assets/images/Project_3.png';
 

 export default function Projects() {
    return (
      <main>
        <h1>PROJECT BAKEOVER</h1>
        <div className="projectcontainer">
           <img src={projectone} alt="Tasty Bakery" /> 
           <img src={projecttwo} alt="Tasty Bakery" /> 
           <img src={projectthree} alt="Tasty Bakery" /> 
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie ipsum in massa tristique, at cursus dui auctor. Donec lorem nisi, dapibus ac elementum ac, consectetur eu odio. Phasellus sed elit tellus. Phasellus mauris metus, cursus eget mollis eget, malesuada a nunc. Ut vitae neque nisl. Suspendisse id ante lectus. In vel purus ac mauris facilisis scelerisque.
             Nulla bibendum blandit bibendum. Nullam fermentum non tellus porta vulputate. 
             In at luctus nunc. Donec nulla leo, luctus non massa in, condimentum finibusst.
             Suspendisse sit amet rutrum diam. Morbi convallis justo a massa rutrum bibendum. 
             Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam quis
             luctus eros, a finibus eros. Vivamus at turpis fermentum, placerat libero ac, molestie ligula. Fusce sed feugiat mauris, vitae convallis eros. Maecenas dapibus eleifend lacus iaculis mattis. Curabitur in neque gravida, tristique tellus ut, elementum ante. Maecenas semper metus vitae massa vulputate, sed egestas nisi consequat. Donec luctus ut velit sit amet dignissim. </p>
      </main>
    );
  }