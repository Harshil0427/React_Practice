import ReactImglogo from '../../assets/react-core-concepts.png';
import '../Header/Header.css'

// The first word changes continues of which we have given in the array 
const reactDes = ['Fundamental','Crucial','Core'];

function genRandom(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const desc = [reactDes[genRandom(2)]]

  return (
    <header>
      <img src={ReactImglogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
         {desc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
