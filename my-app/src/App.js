import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HornedBeast from './HornedBeast';
import Main from './Main';
import BeastData from './data.json';
import { Modal, Button } from 'react-bootstrap';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  let myName = "Eric Starks"
  const [selectedBeast, setSelectedBeast] = useState(null)
  let selectedBeastHTML = <SelectedBeast beast={selectedBeast} onClose={() => setSelectedBeast(null)} />
  if (selectedBeast === null){
    selectedBeastHTML = <></>
  }
  return (
    <div className="App">
      {/* <HornedBeast  /> */}
      {selectedBeastHTML}
      <Header />
      
      <Main beasts={BeastData} onBeastClick={setSelectedBeast}/>
      <Footer/>
    </div>
     
  );
}

export default App;
