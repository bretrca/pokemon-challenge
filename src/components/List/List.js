import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fetchAttributes from "../../services/fetch";
import routerService from "../../services/routerService";
import {
  ListItemContainer,
  ImageItem,
  TitleItem,
  Button,
  ButtonContainer,
  ContentContainer
} from "./List.styled";
const List = ({ url, name }) => {
  const [data, setData] = useState(null);
  const { search } = useLocation();

  useEffect(() => {
    fetchAttributes(url, setData);
  }, [url]);

  if (!data) return null;
  const idPokemon = url
    .split("/")
    .filter((word) => word.trim().length > 0)
    .pop();
  const pokemonTo = routerService(idPokemon, search);
  return (
    <li>
      <ListItemContainer>
        <ContentContainer>
          <TitleItem>{name}</TitleItem>
        </ContentContainer>
        <ImageItem
          src={data.sprites.front_default}
          alt={"image of " + { name }}
        />
        <ButtonContainer>
          <Link to={pokemonTo}>
            <Button></Button>
          </Link>
        </ButtonContainer>
      </ListItemContainer>
    </li>
  );
};

export default List;
