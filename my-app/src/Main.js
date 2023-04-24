import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HornedBeast from './HornedBeast';

function Main(props) {
  let myName = "Eric Starks"
  return (
    <>
    <HornedBeast description="This a Ram" image={"https://tailandfur.com/wp-content/uploads/2014/08/animals-with-horns-20.jpg"} title={"First Horned Beast"}/>
    <HornedBeast description="This is a Goat" image={"https://th.bing.com/th/id/R.4d9d334d6995b22d710e978e155e2308?rik=yQ66RdQaALU%2fsA&pid=ImgRaw&r=0"} title={"Second Horned Beast"} />
    </>
  );
}

export default Main;
