import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PokemonCard from "../components/pokemonCard";
import Button from "@mui/material/Button";
import Loader from "../components/loader";

function Home() {
  const [cardData, setCardData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=6&offset=6")
      .then((res) => res.json())
      .then((json) => {
        setCardData(json);
        setIsLoadingData(false);
      });
  }, []);

  const getNext = () => {
    fetch(cardData.next)
      .then((res) => res.json())
      .then((json) => setCardData(json));
  };

  const getPrevious = () => {
    fetch(cardData.previous)
      .then((res) => res.json())
      .then((json) => setCardData(json));
  };

  return (
    <div className="page">
      {isLoadingData ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={8}>
            {cardData.results &&
              cardData.results.map((cardItem, index) => (
                <Grid item lg={4} md={6} xs={12} key={index}>
                  <PokemonCard cardItem={cardItem} />
                </Grid>
              ))}
          </Grid>
          <div className="actionBtn">
            <Button size="medium" onClick={() => getPrevious()}>
              Previous
            </Button>
            <Button size="medium" onClick={() => getNext()} className="nextBtn">
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
