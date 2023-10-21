import { Link } from "react-router-dom";

function BNIcon(){
  return(
    <>
      <Link className="navbar-brand" id="brand" to="/">
      <img
      src={process.env.PUBLIC_URL + '/favicon.ico'}
      alt="Logo"
      width={30}
      height={24}
      className={"me-1"}
      />
      iHome Creations
      </Link>
    </>
  );
}

export {BNIcon};