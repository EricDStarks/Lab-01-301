import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function HornedBeast(props) {
  let myName = "Eric Starks"
  return (
    <>
    <h2>{props.title}</h2>
    <img src={props.image} width="200" height="200" alt="HornedBeast" title="HornedBeast"></img>
    <p>{props.description}</p>
    </>
  );
}

export default HornedBeast;
