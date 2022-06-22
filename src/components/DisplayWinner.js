
function DisplayWinner (props) {
    return (
        <section className="wrapper">
            {
                props.queen.map((queen) => {
                    return (
                        <div className="queen" key={queen.id}>
                            <div className="queenLeft">
                                <div className="imgContainer">
                                    <img src={queen.image_url} alt={`${queen.name}`}/>
                                </div>
                            </div>

                            <div className="queenRight">
                                <p>{queen.quote}</p>
                                <h3>{`-${queen.name}`}</h3>



                                <h4>You wanna feel better?</h4>
                                <h4>{`${queen.name} suggests trying:`}</h4>

                                <a className="makeupResult" href={props.lipstick.product_link}>
                                <h5>{`${props.lipstick.name} by ${props.lipstick.brand}`}</h5>
                                <div className="makeupImage">
                                <img src={props.lipstick.api_featured_image} alt={`${props.lipstick.name}`}/>
                                </div>
                                </a>
                            </div>
                        </div>
                    );
                })
            }
        </section>
    )
 }


export default DisplayWinner;