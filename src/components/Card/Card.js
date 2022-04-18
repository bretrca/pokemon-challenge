import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fetchAttributes from "../../services/fetch";
import routerService from "../../services/routerService";
import {
  PokemonContainer,
  PokemonTitle,
  PokemonImage,
  ButtonContainer,
  Button
} from "./Card.styled";

const Card = ({ url, name }) => {
  const { search } = useLocation();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAttributes(url, setData);
  }, [url]);

  const idPokemon = url
    .split("/")
    .filter((word) => word.trim().length > 0)
    .pop();

  const pokemonTo = routerService(idPokemon, search);

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
        <Link to={pokemonTo}>
          <Button></Button>
        </Link>
      </ButtonContainer>
    </PokemonContainer>
  );
};

export default Card;
