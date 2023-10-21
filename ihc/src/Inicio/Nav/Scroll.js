function Scroll(props){
    return(
    <li className="nav-item">
        <a className="nav-link text-dark" href={props.linkSc}>
            {props.nameSc}
        </a>
    </li>);
}

export {Scroll};