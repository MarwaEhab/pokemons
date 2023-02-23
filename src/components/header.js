import { Link } from "react-router-dom";
import Search from "./search";

function Header() {
  return (
    <div className="header">
      <div className="logoBlock">
        <Link to="/">
          <img src="/logo.png" className="logo" alt="pokemon logo" />
        </Link>
        <h2>Pokemon Gallery</h2>
      </div>
      <Search />
    </div>
  );
}

export default Header;
