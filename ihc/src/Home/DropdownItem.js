function DropdownItem(props){
    return(
        <>
        <li>
            <a className="dropdown-item" href={props.linkDropItem}>
            {props.nameDropItem}
            </a>
        </li>
        </>
    );
}

export {DropdownItem};