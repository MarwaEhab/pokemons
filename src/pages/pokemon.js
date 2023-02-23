import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Loader from "../components/loader";

function Pokemon() {
  const [details, setDetails] = useState([]);
  const { name } = useParams();
  const [value, setValue] = useState(0);
  const [isLoadingData, setIsLoadingData] = useState(true);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
        setIsLoadingData(false);
      });
  }, [name]);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className="page detailsPage">
      {isLoadingData ? (
        <Loader />
      ) : (
        <>
          {" "}
          <Link to={"/"} size="medium" className="backBtn">
            <ArrowBackIosIcon /> <span>Back </span>
          </Link>
          <Card sx={{ maxWidth: "70%" }} className="pokemonCardDetails">
            <CardContent>
              <div className="cardMain">
                <img
                  src={
                    details.sprites &&
                    details.sprites.other["official-artwork"].front_default
                  }
                  alt={name}
                />
                <div>
                  <h1>{name}</h1>
                  <div className="types">
                    {details.types &&
                      details.types.map((type, index) => (
                        <Button size="small" className="cardBtn" key={index}>
                          {type.type.name}
                        </Button>
                      ))}
                  </div>
                </div>
              </div>
              <div className="pokemonTabsinfo">
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="pokemonTabsinfo"
                    >
                      <Tab label="STAT" {...a11yProps(0)} />
                      <Tab label="MOVES" {...a11yProps(1)} />
                      <Tab label="ABILITIES" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    {details.stats &&
                      details.stats.map((stat, index) => (
                        <div className="tab stat" key={index}>
                          <div>{stat.stat.name}</div>
                          <div>{stat.base_stat}</div>
                        </div>
                      ))}
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    {details.moves &&
                      details.moves.map((move) => <div>{move.move.name}</div>)}
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    {details.abilities &&
                      details.abilities.map((ability) => (
                        <div>{ability.ability.name}</div>
                      ))}
                  </TabPanel>
                </Box>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

export default Pokemon;
