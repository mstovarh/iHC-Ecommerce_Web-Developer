import './cardIndvIH.css'
import { Link } from "react-router-dom";

function CardIndvIH(props){
    return(
        <>
            <div className="card color" style={{ width: "18rem" }}>
                <img
                    src={props.srcImgCard}
                    className="card-img-top"
                    alt={props.altCard}
                />
                <div className="card-body">
                    <h5 className="card-title">
                    {props.nameCard}
                    </h5>
                    <p className="card-text pih"><strong>${props.priceCard}</strong></p>
                    <div className="input-group mb-3">
                        <input
                        type="number"
                        className="form-control st-cant"
                        placeholder="Cantidad"
                        aria-label="Cantidad"
                        aria-describedby="basic-addon2"
                        data-product-index=""
                        min="0"
                        />
                    </div>    
                    <Link to={props.linkS} className="btn btn-outline-warning">
                        Comprar ahora
                    </Link>
                </div>
            </div>
        </>
    );
}

export {CardIndvIH};