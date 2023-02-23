import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/searchResluts/${search}`);
    }
  };

  return (
    <div className="searchBlock">
      <form>
        <SearchIcon fontSize="10" className="searchIcon" />
        <input
          name="search"
          type="text"
          value={search}
          placeholder="Search..."
          onKeyDown={handleKeyDown}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
