import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import getTypeStyle from "../../constants/pokemon_types";

import {
  PokemonContainerDescription,
  PokemonDescData,
  PokemonDescHeader,
  PokemonDescriptionAbilities
} from "./DetailCard.styled";

const DetailCard = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const history = useHistory();
  console.log(history.location.search);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(async (rs) => {
      const json = await rs.json();
      setPokemonDetails(json);
    });
  }, [id]);

  if (!pokemonDetails) return null;
  const abilities = pokemonDetails.abilities.map((ability) => (
    <span> {ability.ability.name} </span>
  ));
  const image = pokemonDetails.sprites.front_default;
  const bgcolorType = pokemonDetails.types.map((type) =>
    type.type.name.slice()
  );
  const backTo = {
    pathname: "/",
    query: history.location.search
  };
  return (
    <>
      <PokemonContainerDescription key={id} color={getTypeStyle(bgcolorType)}>
        <PokemonDescHeader>{pokemonDetails.name}</PokemonDescHeader>
        <PokemonDescData src={image} alt="from description sprite" />

        <PokemonDescriptionAbilities>
          abilities:{abilities}
        </PokemonDescriptionAbilities>
      </PokemonContainerDescription>
      <Link to={backTo}>Back to list</Link>
    </>
  );
};

export default DetailCard;
