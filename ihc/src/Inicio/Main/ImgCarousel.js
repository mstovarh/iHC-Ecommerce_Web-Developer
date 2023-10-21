function ImgCarousel(props){
    return(
        <img
        src={props.linkImgC}
        className="d-block w-100"
        alt={props.altImgC}/>
    );
}

export {ImgCarousel};