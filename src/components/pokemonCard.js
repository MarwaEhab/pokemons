import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FlavorText from "./flavorText";

function PokemonCard({ cardItem, cardResult }) {
  const [card, setCard] = useState([]);

  const url = cardResult ? "" : cardItem.url;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setCard(json));
  }, [url]);

  return (
    <div className="pokemoneCard">
      <Link to={`/pokemon/${cardResult ? cardResult.name : cardItem.name}`}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={card.name}
            height="140"
            image={
              cardResult
                ? cardResult.sprites.other["official-artwork"].front_default
                : card.sprites &&
                  card.sprites.other["official-artwork"].front_default
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardResult ? cardResult.name : card.name}
            </Typography>
            <FlavorText id={cardResult ? cardResult.id : card.id} />
          </CardContent>
          <CardActions>
            {cardResult ? (
              <div className="types">
                {cardResult.types &&
                  cardResult.types.map((type, index) => (
                    <Button size="small" className="cardBtn" key={index}>
                      {type.type.name}
                    </Button>
                  ))}
              </div>
            ) : (
              <div className="types">
                {card.types &&
                  card.types.map((type, index) => (
                    <Button size="small" className="cardBtn" key={index}>
                      {type.type.name}
                    </Button>
                  ))}
              </div>
            )}
          </CardActions>
        </Card>
      </Link>
    </div>
  );
}

export default PokemonCard;
