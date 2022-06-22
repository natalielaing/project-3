import axios from "axios";

const RandomSearch = (props) => {


    const clearWinner = function() {
        props.setQueen([]);
    }

    const getQueen = (e) => {
    clearWinner();

    props.setButtonClick(true);

    const id = Math.floor(Math.random() * 167);
    const random = Math.floor(Math.random() * 154);

    axios.all([
        axios({
            baseURL: `https://www.nokeynoshade.party/api/queens/${id}`,
            method: "GET",
            params: {
            limit: 1
            }}),
        axios({
                baseURL: "https://makeup-api.herokuapp.com/api/v1/products.json",
                method: "GET",
                params: {
                product_type: "lipstick",
                limit: 1,
                }})

            ])
        .then(axios.spread((queenData, makeupData) => {
        props.setRandomQueen(queenData.data);
        props.setLipstick(makeupData.data[random]);
            }))
        .catch(err => {
            const errorHandle = alert("Looks like there was a bit of a mixup... YASS you should definitely try searching again!");
            errorHandle();
            props.setButtonClick(false);
        })
   

      };

      return (
          <div className="randomSearch">
              <h4>Any inspiration is good for me:</h4>
              <div className="randomButton">
              <button onClick={()=> {getQueen()}}>Any Queen Will Do...</button>
              </div>
          </div>
      )

}


export default RandomSearch;