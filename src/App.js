import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import OpeningCrawl from "./OpeningCrawl";
import { Row, Column } from "./Grid";
import Error from "./Error";

const App = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [selectedTile, setSelectedTile] = useState("1");
  const [openingCrawl, setOpeningCrawl] = useState("");
  const [error, setError] = useState("");

  const TileList = ({ movieInfo, setSelectedTile }) => {
    console.log(movieInfo, "movieInfo in tileMap");
    const tileMap = movieInfo.map(movie => {
      const { opening_crawl, episode_id } = movie;
      //set selected Movie to Episode 1
      //not strict equivalency to account for typecasting
      const selected = episode_id == selectedTile;
      if (selected) {
        setOpeningCrawl(opening_crawl);
      }
      return (
        <Column key={episode_id}>
          <Tile
            key={episode_id}
            movieInfo={movie}
            selected={selected}
            setSelectedTile={setSelectedTile}
          />
        </Column>
      );
    });
    console.log(tileMap, "tileMap");
    //compare function to sort movies by episode
    const compareMovies = (movie1, movie2) => {
      if (movie1.key < movie2.key) {
        return -1;
      }
      return 1;
    };
    //sort movies by episode using compare function above
    return tileMap.sort(compareMovies);
  };

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const filmResponse = await fetch("https://swapi.co/api/films/");
        if (filmResponse.status === 200) {
          const parsedResponse = await filmResponse.json();
          console.log(parsedResponse);

          const infoMap = await parsedResponse.results.map(movie => {
            const { episode_id, title, director, opening_crawl } = movie;
            return {
              episode_id: episode_id,
              title: title,
              director: director,
              opening_crawl: opening_crawl
            };
          });
          setMovieInfo(infoMap);
          // setOpeningCrawl(infoMap[0].props.movieInfo.opening_crawl);
        } else {
          console.log(filmResponse.status, "<--error in else in fetchFilms");
          setError(filmResponse.status);
        }
      } catch (err) {
        console.log(err);
        setError(err);
      }
    };
    fetchFilms().then(setOpeningCrawl(selectedTile));
  }, [selectedTile]);
  return (
    <div className="main-div">
      {/* If there's an error, display Error component. If not, ternary for TileList or Loading Movies message */}
      {error ? (
        <Error />
      ) : movieInfo.length ? (
        <div>
          <Row>
            <OpeningCrawl openingCrawl={openingCrawl} />
          </Row>
          <Row>
            <TileList movieInfo={movieInfo} setSelectedTile={setSelectedTile} />
          </Row>
        </div>
      ) : (
        <h1>...Loading Movies</h1>
      )}
    </div>
  );
};

export default App;
