import { CardIndvA } from "./CardIndvA";
import './containerCardsA.css';

function ContainerCardsA(props){
    const products = props.d;
    const isDataAvailable = products.length > 0;

    return(
        <>
            <div className="container text-center" id="contCardProducts">
                <div className="row">
                {products.map((product, index) => (
                <div key={index} className="col d-flex align-items-center justify-content-center st-cardA">
                    <CardIndvA
                    srcImgCard={isDataAvailable ? product.imageSrc : []}
                    altCard={isDataAvailable ? product.altCard : ''}
                    nameCard={isDataAvailable ? product.name : ''}
                    priceCard={isDataAvailable ? product.price : ''}
                    stockCard={isDataAvailable ? product.stock : ''}
                    />
                </div>
                ))}
                 {/*    <div className="col d-flex align-items-center justify-content-center st-cardA">
                        <CardIndvA srcImgCard={isDataAvailable ? products[0].imageSrc : []} altCard={"smartLock"} nameCard={isDataAvailable ? products[0].name : []} priceCard={isDataAvailable ? products[0].price : []} stockCard={isDataAvailable ? products[0].stock : []}/>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center st-cardA">
                        <CardIndvA srcImgCard={isDataAvailable ? products[1].imageSrc : []} altCard={"sensor"} nameCard={isDataAvailable ? products[1].name : []} priceCard={isDataAvailable ? products[1].price : []} stockCard={isDataAvailable ? products[1].stock : []}/>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center st-cardA">
                        <CardIndvA srcImgCard={isDataAvailable ? products[2].imageSrc : []} altCard={"alexa1"} nameCard={isDataAvailable ? products[2].name : []} priceCard={isDataAvailable ? products[2].price : []} stockCard={isDataAvailable ? products[2].stock : []}/>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center st-cardA">
                        <CardIndvA srcImgCard={isDataAvailable ? products[3].imageSrc : []} altCard={"alexa2"} nameCard={isDataAvailable ? products[3].name : []} priceCard={isDataAvailable ? products[3].price : []} stockCard={isDataAvailable ? products[3].stock : []}/>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center st-cardA">
                        <CardIndvA srcImgCard={isDataAvailable ? products[4].imageSrc : []} altCard={"alexa3"} nameCard={isDataAvailable ? products[4].name : []} priceCard={isDataAvailable ? products[4].price : []} stockCard={isDataAvailable ? products[4].stock : []}/>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center st-cardA">
                        <CardIndvA srcImgCard={isDataAvailable ? products[5].imageSrc : []} altCard={"termostato"} nameCard={isDataAvailable ? products[5].name : []} priceCard={isDataAvailable ? products[5].price : []} stockCard={isDataAvailable ? products[5].stock : []}/>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export {ContainerCardsA};