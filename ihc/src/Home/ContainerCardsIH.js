import { CardIndvIH } from "./CardIndvIH";
/* import { Products } from "../Products.js"; */
import './containerCardsIH.css';

function ContainerCardsIH(props){
    /* const products = Products(); */
    const products = props.p;
    const isDataAvailable = products.length > 0;

    return(
        <div className="container text-center" id="contCardProducts">
            <div className="row">
                {products.map((product, index) => (
                <div key={index} className="col st-card">
                    <CardIndvIH
                    srcImgCard={isDataAvailable ? product.imageSrc : ''}
                    altCard={'productSmart'}
                    nameCard={isDataAvailable ? product.name : ''}
                    priceCard={isDataAvailable ? product.price : ''}
                    linkS={props.link}
                    />
                </div>
                ))}
                {/* <div className="col d-flex align-items-center justify-content-center st-card">
                    <CardIndvIH srcImgCard={isDataAvailable ? products[0].imageSrc : []} altCard={"smartLock"} nameCard={isDataAvailable ? products[0].name : []} priceCard={isDataAvailable ? products[0].price : []} linkS={props.link}/>
                </div>
                <div className="col d-flex align-items-center justify-content-center st-card">
                    <CardIndvIH srcImgCard={isDataAvailable ? products[1].imageSrc : []} altCard={"sensor"} nameCard={isDataAvailable ? products[1].name : []} priceCard={isDataAvailable ? products[1].price : []} linkS={props.link}/>
                </div>
                <div className="col d-flex align-items-center justify-content-center st-card">
                    <CardIndvIH srcImgCard={isDataAvailable ? products[2].imageSrc : []} altCard={"alexa1"} nameCard={isDataAvailable ? products[2].name : []} priceCard={isDataAvailable ? products[2].price : []} linkS={props.link}/>
                </div>
                <div className="col d-flex align-items-center justify-content-center st-card">
                    <CardIndvIH srcImgCard={isDataAvailable ? products[3].imageSrc : []} altCard={"alexa2"} nameCard={isDataAvailable ? products[3].name : []} priceCard={isDataAvailable ? products[3].price : []} linkS={props.link}/>
                </div>
                <div className="col d-flex align-items-center justify-content-center st-card">
                    <CardIndvIH srcImgCard={isDataAvailable ? products[4].imageSrc : []} altCard={"alexa3"} nameCard={isDataAvailable ? products[4].name : []} priceCard={isDataAvailable ? products[4].price : []} linkS={props.link}/>
                </div>
                <div className="col d-flex align-items-center justify-content-center st-card">
                    <CardIndvIH srcImgCard={isDataAvailable ? products[5].imageSrc : []} altCard={"termostato"} nameCard={isDataAvailable ? products[5].name : []} priceCard={isDataAvailable ? products[5].price : []} linkS={props.link}/>
                </div> */}
            </div>
        </div>
    );
}

export {ContainerCardsIH};