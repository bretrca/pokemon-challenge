import React, { useEffect, useState } from "react";
import {
  PokemonContainer,
  PokemonTitle,
  PokemonImage,
  ButtonContainer,
  Button
} from "./Card.styled";

const Card = ({ url, name }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAttributes(url);
  }, [url]);
  const fetchAttributes = async (url) => {
    fetch(`${url}`, { method: "GET" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        return setData(res);
      });
  };
  const clickHandler = () => {
    console.log("click");
  };

  if (!data) return null;

  return (
    <PokemonContainer role={PokemonContainer}>
      <div>
        <PokemonTitle role={PokemonTitle}>{name}</PokemonTitle>
        <PokemonImage
          role={PokemonImage}
          src={data.sprites.front_default}
          alt=" images "
        />
      </div>

      <ButtonContainer role={ButtonContainer}>
        <Button onClick={() => clickHandler(url)}>Select {name}</Button>
      </ButtonContainer>
    </PokemonContainer>
  );
};

export default Card;
