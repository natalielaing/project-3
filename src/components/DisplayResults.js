import '../App.css';

function DisplayResults (props) {
    return (
        <section className="wrapper">
            {
                props.queen.map((queen) => {
                    return (
                        <div className="queen" key={queen.id}>
                            <div className="queenLeft">
                                <div className="imgContainer">
                                    <img src={queen.image_url} alt="photo of" {...queen.name}/>
                                </div>
                            </div>

                            <div className="queenRight">
                                <p>{queen.quote}</p>
                                <h3>{queen.name}</h3>
                            </div>
                        </div>
                    );
                })
            }

            <div className="queen">

                <div className="queenLeft">
                    <div className="imgContainer">
                        {props.buttonClick && <img src={props.randomQueen.image_url} alt="photo of" {...props.randomQueen.name}/>}
                     </div>
                </div>

                <div className="queenRight">
                    {props.buttonClick && <p>{props.randomQueen.quote}</p>}
                    {props.buttonClick && <h3>{props.randomQueen.name}</h3>}
                </div>

              </div>
        </section>
    )
}

export default DisplayResults;