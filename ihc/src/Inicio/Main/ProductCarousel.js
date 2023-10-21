import { CardIndvIH } from '../../Home/CardIndvIH';
import './productCarousel.css';

function ProductCarousel(props){
    /* console.log(props);  */
    return(
    <div className="py-0 d-flex justify-content-center">
        <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-root-margin="0px 0px -40%"
            data-bs-smooth-scroll="true"
            className="scrollspy-example bg-body-tertiary rounded-2 st-cardPC"
            tabIndex={0}
            >
            <CardIndvIH srcImgCard={props.src} altCard={props.alt} nameCard={props.name} priceCard={props.price} linkS={'/login'} />
        </div>
    </div>
    );
}

export {ProductCarousel};