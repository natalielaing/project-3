import './App.css';
import {useState} from "react";
import WinnerSearch from "./components/WinnerSearch";


function App() {

  const [queen, setQueen] = useState ([]);
  const [queenChoice, setQueenChoice] = useState('');

  const handleSubmit = function(event, selectedQueen) {
    event.preventDefault();
    // clearRandom();
    setQueenChoice(selectedQueen);
  }



  return (
    <div className="main">
      <div className="wrapper">
        <h2>Looking for some inspiration?</h2>
        <h3>Prepare to be...</h3>
        <h1>Yassified</h1>
        <WinnerSearch
        queen={queen}
        setQueen={setQueen}
        queenChoice={queenChoice}
        setQueenChoice={setQueenChoice}
        handleSubmit={handleSubmit}
        />
        {/* <RandomSearch/>
        <Makeup/> */}
      </div>
    </div>
  );
}

export default App;
