import './header.css';

function Header(props){
    return (
    <header className="element text-center st-header">{props.descuento} OFF en todas {props.productoD} entre el {props.deadLineOne} y el {props.deadLineTwo} de {props.mesD} ¡No te lo
    pierdas!</header>
    );
}

export {Header};