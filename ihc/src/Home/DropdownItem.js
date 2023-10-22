import { Link } from "react-router-dom";


function DropdownItem(props){
    return(
        <>
        <li>
            <Link className="dropdown-item" to={props.linkDropItem}>
            {props.nameDropItem}
            </Link>
        </li>
        </>
    );
}

export {DropdownItem};