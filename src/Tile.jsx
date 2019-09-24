import React from "react";
import styled from "styled-components";

const TileWrapper = styled.button.attrs(({ selected }) => ({
  selected: selected
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 0.5rem;
  width: 80%;
  min-width: 140px;
  min-height: 114px;
  background-color: #e9e9e9;
  opacity: 0.9;
  border: ${props => (props.selected ? "2px solid black" : "2px solid grey")};
  box-shadow: ${props => (props.selected ? "0px 0px 4px 4px #e9e9e9" : "none")}
  border-radius: 8px;
  :hover {
    border: 2px solid gold;
  }
`;

const Title = styled.div`
  margin: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
`;

const Director = styled.div`
  margin: 0.5rem;
  font-size: 0.8rem;
`;

const Tile = ({ movieInfo, setSelectedTile, selected }) => {
  // setting the variables below to be part of an array caused "TypeError: arr[symbol.iterator]is not a function"
  const { episode_id, title, director } = movieInfo;

  //toggle select prop on click, which will cause rerender of all tiles
  // and passing new selected props (true/false) to all tiles
  const toggleSelect = e => {
    setSelectedTile(episode_id);
  };

  return (
    <TileWrapper onClick={toggleSelect} selected={selected}>
      <Title>{title}</Title>
      <Director>{director}</Director>
    </TileWrapper>
  );
};

export default Tile;
