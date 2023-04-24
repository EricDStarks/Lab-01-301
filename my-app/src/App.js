import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HornedBeast from './HornedBeast';
import Main from './Main';
function App(props) {
  let myName = "Eric Starks"
  return (
    <div className="App">
      <Header />
      
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
