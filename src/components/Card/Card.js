import React, { useEffect, useState } from "react";
import {
  PokemonContainer,
  PokemonTitle,
  PokemonImage,
  ButtonContainer,
  Button
} from "./Card.styled";

const CardComponent = ({attributes}) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`${attributes.url}`, {
      method: "GET",
      headers: {
        protocol: "https"
      }
    })
      .then( (res)=>{
         if (res.ok) {
        console.log(res);
        return res.json();
      } else {
        throw res;
      }})
      .then((res) => {
        return setData(res);
      });
  }, []);
  console.log(data );
  return (
    <PokemonContainer role={PokemonContainer}>
      <PokemonTitle role={PokemonTitle}>{attributes.name}</PokemonTitle>
      <PokemonImage role={PokemonImage}>
      <img src={data.sprites.front_default} alt=" images "></img></PokemonImage>
      <ButtonContainer role={ButtonContainer}>
        <Button>Select this pokemon</Button>
      </ButtonContainer>
    </PokemonContainer>
  );
};

export default CardComponent;
