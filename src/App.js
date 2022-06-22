import './App.css';
import {useState} from "react";
import WinnerSearch from "./components/WinnerSearch";
import RandomSearch from "./components/RandomSearch";
import DisplayWinner from "./components/DisplayWinner";
import DisplayRandom from './components/DisplayRandom';


function App() {

  const [queen, setQueen] = useState ([]);
  const [randomQueen, setRandomQueen] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const [lipstick, setLipstick] = useState([]);


  return (
    <>
    <div className="main">
      <div className="wrapper">
        <header>
        <div className="flexTitle">
            <div className="ruContainer">
                  <img src={require('./assets/rupaul1.png')}  alt={'photo of rupaul'}/>
            </div>
            <h1>Yassified</h1>
        </div>
        <h2><span>Yass</span>ify yourself with the help of a Queen!</h2>
        </header>
        <div className="flexContainer">
            <div className="winnerSearch">
              <WinnerSearch
              queen={queen}
              setQueen={setQueen}
              randomQueen={randomQueen}
              setRandomQueen={setRandomQueen}
              buttonClick={buttonClick}
              setButtonClick={setButtonClick}
              lipstick={lipstick}
              setLipstick={setLipstick}
              />
            </div>
            <div className="or">
              <h4>OR</h4>
            </div>
            <div className="randomSearch">
              <RandomSearch
              queen={queen}
              setQueen={setQueen}
              randomQueen={randomQueen}
              setRandomQueen={setRandomQueen}
              buttonClick={buttonClick}
              setButtonClick={setButtonClick}
              lipstick={lipstick}
              setLipstick={setLipstick}
              />
              </div>
          </div>
        <DisplayWinner
        queen={queen}
        randomQueen={randomQueen}
        buttonClick={buttonClick}
        lipstick={lipstick}
        />
        <DisplayRandom
        queen={queen}
        randomQueen={randomQueen}
        buttonClick={buttonClick}
        lipstick={lipstick}
        />
      </div>
    </div>
    <footer>
      <p>Created at Juno College of Technology 🦑</p>
    </footer>
    </>
    
  );
}

export default App;
