import { useEffect, useState } from "react";
import PokemonCard from "../components/pokemonCard";
import { fetchPokemon } from "../constants/constants";
import { MagnifyingGlass } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import SearchOffSharpIcon from "@mui/icons-material/SearchOffSharp";

function SearchResult() {
  const { query } = useParams();
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getPokemon = async () => {
    if (!query) {
      setErrorMsg("You must enter a Pokemon");
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        setErrorMsg(`No Pokemon With Name ${query}`);
      }
    }, 1500);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="page">
      <div className="LoadignResult">
        {error ? (
          <div className="noPokemon">
            <SearchOffSharpIcon />
            <h2>{errorMsg}</h2>
            <p>Sorry, try another Pokemon Name for example 'wartortle'</p>
          </div>
        ) : null}

        {loading ? (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        ) : null}
      </div>

      {!loading && pokemon ? <PokemonCard cardResult={pokemon} /> : null}
    </div>
  );
}

export default SearchResult;
