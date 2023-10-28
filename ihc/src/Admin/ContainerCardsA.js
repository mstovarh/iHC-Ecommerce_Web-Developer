import React from 'react';
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
                </div>
            </div>
        </>
    );
}

export {ContainerCardsA};