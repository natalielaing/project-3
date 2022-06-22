import axios from "axios";
import {useState, useEffect} from "react";

const WinnerSearch = (props) => {

    const [queenChoice, setQueenChoice] = useState('');
    const [queenSearch, setQueenSearch] = useState ('');

    const handleChange = (event) => {
        setQueenChoice(event.target.value);
    }

    const clearRandom = function () {
        props.setRandomQueen([]);
        props.setButtonClick((false))
    }

    const handleSubmit = function(event, selectedQueen) {
        event.preventDefault();
        window.scrollBy({
            top: 900,
            behavior: 'smooth'
          });
        setQueenSearch(selectedQueen);
        clearRandom();
      }

    useEffect( () => {

        const random = Math.floor(Math.random() * 154);
        if (queenSearch && queenSearch !== "placeholder") {
            axios.all([
                axios({
                    baseURL: "https://www.nokeynoshade.party/api/queens",
                    method: "GET",
                    params: {
                    name: queenSearch,
                    limit: 1
                    }}),
                axios({
                        baseURL: "https://makeup-api.herokuapp.com/api/v1/products.json",
                        method: "GET",
                        params: {
                        product_type: "lipstick",
                        limit: 1
                        }})

            ])
            .then(axios.spread((queenData, makeupData) => {
                props.setQueen(queenData.data);
                props.setLipstick(makeupData.data[random]);
            }))
            .catch(err => {
                const errorHandle = alert("Looks like there was a bit of a mixup... YASS you should definitely try searching again!");
                errorHandle();
            })
        }
              }, [queenSearch]);
        

    return (
        <section>
            <div className="wrapper">
                <h4>I need some winning inspiration:</h4>
                <form onSubmit={(event, selectedQueen) => {
                    handleSubmit(event, queenChoice)}}>
                    <select onChange={handleChange} name="queen" id="chosenQueen" value={queenChoice}>
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
        </section>
    )
}

export default WinnerSearch