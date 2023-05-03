import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HornedBeast from './HornedBeast';
import BeastData from './data.json';
import SearchBeast from './SearchBeast';

function Main(props) {
  let myName = "Eric Starks"
  // go from array of beast objects (BeastData) to array of HornedBeast components.

  let beastsHTML = []
  for (let i = 0; i < BeastData.length; i++ ){
    // let html = <h1>{BeastData[i].title}</h1>
    let html = <HornedBeast onBeastClick={props.onBeastClick} title={BeastData[i].title} image={BeastData[i].image_url} description={BeastData[i].description} />
    beastsHTML.push (html)
  }

  return (
    <>
    <SearchBeast />
      {beastsHTML}
    </>
  );
}

export default Main;
