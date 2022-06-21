import './App.css';
import {useState} from "react";
import WinnerSearch from "./components/WinnerSearch";
import RandomSearch from "./components/RandomSearch";
import DisplayResults from "./components/DisplayResults";


function App() {

  const [queen, setQueen] = useState ([]);
  const [randomQueen, setRandomQueen] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  // const [queenChoice, setQueenChoice] = useState('');

  // const handleSubmit = function(event, selectedQueen) {
  //   event.preventDefault();
  //   // clearRandom();
  //   setQueenChoice(selectedQueen);
  // }



  return (
    <div className="main">
      <div className="wrapper">
        <h2>Looking for some inspiration?</h2>
        <h3>Prepare to be...</h3>
        <h1>Yassified</h1>
        <div className="flexContainer">
            <div className="winnerSearch">
              <WinnerSearch
              queen={queen}
              setQueen={setQueen}
              randomQueen={randomQueen}
              setRandomQueen={setRandomQueen}
              buttonClick={buttonClick}
              setButtonClick={setButtonClick}
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
              />
              </div>
          </div>
        <DisplayResults
        queen={queen}
        randomQueen={randomQueen}
        buttonClick={buttonClick}
        />
        {/* <Makeup/> */}
      </div>
    </div>
  );
}

export default App;
