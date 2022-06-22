function DisplayRandom (props) {
    const buttonClicked = props.buttonClick;
    if (buttonClicked) {
    return (
        <>
        <section className="wrapper">
            <div className="queen">

                <div className="queenLeft">
                    <div className="imgContainer">
                    {props.buttonClick && <img src={props.randomQueen.image_url} alt={`photo of ${props.randomQueen.name}`}/>}
                    </div>
                </div>

                <div className="queenRight">

                    {props.buttonClick && <p>{props.randomQueen.quote}</p>}
                    {props.buttonClick && <h3>{`-${props.randomQueen.name}`}</h3>}

                    <div className="makeupIntro">
                    {props.buttonClick && <h4>You wanna feel better?</h4>}
                    {props.buttonClick && <h4>{`${props.randomQueen.name} suggests trying:`}</h4>}
                    </div>

                <a className="makeupResult" href={props.lipstick.product_link}>
                    {props.buttonClick && <h5>{`${props.lipstick.name} by ${props.lipstick.brand}`}</h5>}
                <div className="makeupImage">
                    {props.buttonClick && <img src={props.lipstick.api_featured_image} alt={`photo of ${props.lipstick.name}`}/>}
                </div>
                </a>
                </div>

            </div>
        </section>
        <footer>
            <p>Created at Juno College of Technology 🦑</p>
        </footer>
        </>
        )
    }
}

export default DisplayRandom;
    