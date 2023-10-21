function ItemsNavAd(props){
    return(
        <>
            <li className="nav-item">
                <a
                className="nav-link active"
                aria-current="page"
                href={props.linkNavAd}
                >
                {props.nameNavAd}
                </a>
            </li>
        </>
    );
}

export {ItemsNavAd};