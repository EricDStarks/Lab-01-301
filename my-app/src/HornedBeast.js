import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {useState} from'react'
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Modal, Button } from 'react-bootstrap';
import SelectedBeast from './SelectedBeast';

function HornedBeast(props) {
  const [likes, setLikes] =useState(0)
  const [heartLikes, setHeartLikes] =useState(0)
  let heart = "💙"
  
  //function onClick({beasts, onBeastClick}){
    
  //}

   //setLikes(likes+1)
  //}

  function heartClick(){

    setHeartLikes(heartLikes+1)
  }

  // function BeastHorned({beasts, onBeastClick})
function clickFunction(){
  props.onBeastClick({title:props.title, image_url:props.image, description:props.description})

}
  return (
    <Card>
    <Modal show={!HornedBeast}></Modal> 
    <h2>{props.title}</h2>
    <img onClick={clickFunction} src={props.image} width="100" height="100" alt="HornedBeast" title="HornedBeast"></img>
    <p>{props.description}</p>
    {heartLikes}
    <button onClick={heartClick}>{"💙"}</button>
    {/* <div>
      {beasts.map(beast => (
        <div key={beast.id} onClick={() => onBeastClick(beast)}>
          <img src={beast.image} alt={beast.title} />
          <p>{beast.title}</p>
        </div>    
      ))}
    </div>   */}
    </Card>
  );
}

export default HornedBeast;
