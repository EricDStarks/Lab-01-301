import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {useState} from'react'
import Card from 'react-bootstrap/Card';
function HornedBeast(props) {
  //set likes with event listener by creating state
  const [likes, setLikes] =useState(0)
  function onClick(){

   setLikes(likes+1)
  }
  return (
    <Card>
    <h2>{props.title}</h2>
    <img onClick={onClick} src={props.image} width="200" height="200" alt="HornedBeast" title="HornedBeast"></img>
    <p>{props.description}</p>
    💙: {likes}
    </Card>
  );
}

export default HornedBeast;
