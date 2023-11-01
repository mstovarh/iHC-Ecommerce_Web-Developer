import React from 'react';
import { CardIndvIH } from "./CardIndvIH";
import './containerCardsIH.css';

function ContainerCardsIH(props) {
    const products = props.p;
    const isDataAvailable = products.length > 0;

    return (
        <>
            <div className="container text-center" id="contCardProducts">
                <div className="row">
                    {products.map((product, index) => (
                        <div key={index} className="col st-card d-flex justify-content-center">
                            <CardIndvIH
                                srcImgCard={isDataAvailable ? product.imageSrc : ''}
                                altCard={'productSmart'}
                                nameCard={isDataAvailable ? product.name : ''}
                                priceCard={isDataAvailable ? product.price : ''}
                                linkS={props.link}
                                pagRef={props.pag}
                                index={index} 
                                comprarProducto={props.comprarProducto}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export { ContainerCardsIH };
