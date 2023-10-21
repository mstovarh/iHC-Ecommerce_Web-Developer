import './cardIndvA.css'

function CardIndvA(props){
    return(
        <>
        <div className="card colorA" style={{ width: "18rem" }}>
            <img 
                src={props.srcImgCard}
                className="card-img-top"
                alt={props.altCard}
            />
            <div className="card-body">
                <h5 className="card-title">
                {props.nameCard}
                </h5>
                <p className="card-text pa">${props.priceCard}</p>
                <p className="card-text pa"><strong>Stock: {props.stockCard}</strong></p>
            </div>
        </div>
        </>
    );
}

export {CardIndvA};