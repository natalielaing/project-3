import axios from "axios";
import {useState, useEffect} from "react";

const WinnerSearch = (props) => {
    const [queen, setQueen] = useState ([]);
    const [queenChoice, setQueenChoice] = useState('');
    const [queenSearch, setQueenSearch] = useState ('');


    useEffect( () => {
        if (queenChoice && queenChoice != "placeholder") {
            axios({
                baseURL: "http://www.nokeynoshade.party/api/queens",
                method: "GET",
                params: {
                name: queenChoice,
                limit: 1
                }
              }).then((apiData) => {
              setQueen(apiData.data)
            })
                }
              }, [queenChoice]);
        
    const handleChange = (event) => {
        setQueenSearch(event.target.value);
    }

    const handleSubmit = function(event, selectedQueen) {
        event.preventDefault();
        setQueenChoice(selectedQueen);
      }


    return (
        <section>
            <div className="wrapper">
                <form onSubmit={(event) => {
                    handleSubmit(event, queenSearch)
                }}>
                    <select onChange={handleChange} name="queen" id="chosenQueen" value= {queenChoice}>
                        <option value="" default disabled>Pick a Winning Queen</option>
                        <option value="Tyra Sanchez">Tyra Sanchez</option>
                        <option value="Chad Michaels">Chad Michaels</option>
                        <option value="Raja">Raja</option>
                        <option value="Monet X Change">Monet X Change</option>
                        <option value="Trinity Taylor">Trinity Taylor</option>
                        <option value="Trixie Mattel">Trixie Mattel</option>
                        <option value="Aquaria">Aquaria</option>
                        <option value="Yvie Oddly">Yvie Oddly</option>
                        <option value="Bebe Zahara Benet">Bebe Zahara Benet</option>
                        <option value="Sharon Needles">Sharon Needles</option>
                        <option value="Jinkx Monsoon">Jinkx Monsoon</option>
                        <option value="Alaska Thunderfuck 5000">Alaska</option>
                        <option value="Bianca Del Rio">Bianca Del Rio</option>
                        <option value="Violet Chachki">Violet Chachki</option>
                        <option value="Bob the Drag Queen">Bob the Drag Queen</option>
                        <option value="Sasha Velour">Sasha Velour</option>
                        <option value="Shea Coulee">Shea Coulee</option>
                        <option value="Jaida Essence Hall">Jaida Essence Hall</option>
                    </select>
                    <button className="button">Inspire me Queen!</button>

                </form>
            </div>
            {
                queen.map((queen) => {
                    return (
                        <div className="queen" key={queen.id}>
                        <h3>{queen.name}</h3>
                        <img src={queen.image_url} alt="photo of" {...queen.name}/>
                        <p>"{queen.quote}"</p>
                        </div>
                    );
                })
            }
        </section>



    )
}

export default WinnerSearch 