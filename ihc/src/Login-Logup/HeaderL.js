import './headerL.css';

function  HeaderL(props){
    return(
      <>
        <header>
          <div className="row text-center">
            <div className="col s-conecta ">
              <h1 className="display-5">{props.logpag}</h1>
            </div>
          </div>
        </header>
      </>
    );
}

export {HeaderL};