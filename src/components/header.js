import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <img src="/imgs/logo.png" className="logo" alt="pokemon logo" />
      <h2>Pokemon Gallery</h2>
      <div className="searchBlock">
        <input type="text" value="" />
        <SearchIcon fontSize="10" />
      </div>
    </div>
  );
}

export default Header;
