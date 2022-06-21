import axios from "axios";
import {useState} from "react";
import '../App.css';

const RandomSearch = (props) => {

    // const [randomQueen, setRandomQueen] = useState([]);
    // const [buttonClick, setButtonClick] = useState(false);

    const clearWinner = function() {
        props.setQueen([]);
    }

    const getQueen = (e) => {

    {clearWinner()};

    props.setButtonClick(true);

    const id = Math.floor(Math.random() * 167);
   
       
    
      axios({
        baseURL: `http://www.nokeynoshade.party/api/queens/${id}`,
        method: "GET",
        params: {
        limit: 1,
        }
      }).then((apiData) => {
      props.setRandomQueen(apiData.data);
    })

      };

      return (
          <div>
              <h4>Any inspiration is good for me:</h4>
              <button onClick={()=> {getQueen()}}>Any Queen Will Do...</button>
              {/* {props.buttonClick && <h3>{props.randomQueen.name}</h3>}
              {props.buttonClick && <img src={props.randomQueen.image_url} alt="photo of" {...props.randomQueen.name}/>}
              {props.buttonClick && <p>"{props.randomQueen.quote}"</p>} */}
              
          </div>
      )

}


export default RandomSearch;