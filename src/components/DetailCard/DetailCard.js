import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import getTypeStyle from "../../constants/pokemon_types";

import {
  PokemonContainerDescription,
  PokemonDescData,
  PokemonDescHeader,
  PokemonDescriptionAbilities,
  Button
} from "./DetailCard.styled";

const DetailCard = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(async (rs) => {
      const json = await rs.json();
      setPokemonDetails(json);
    });
  }, [id]);

  if (!pokemonDetails) return null;

  const abilities = pokemonDetails.abilities.map((ability) => (
    <p key={ability.ability.slot}> {ability.ability.name} </p>
  ));
  const image = pokemonDetails.sprites.front_default;
  const bgcolorType = pokemonDetails.types.map((type) =>
    type.type.name.slice()
  );
  return (
    <>
      <PokemonContainerDescription color={getTypeStyle(bgcolorType)}>
        <PokemonDescHeader>{pokemonDetails.name}</PokemonDescHeader>
        <PokemonDescData src={image} alt="from description sprite" />

        <PokemonDescriptionAbilities key={pokemonDetails.name + id}>
          <h3> Abilities:</h3>

          {abilities}
        </PokemonDescriptionAbilities>
      </PokemonContainerDescription>

      <Button onClick={() => history.goBack()}>Back</Button>
    </>
  );
};

export default DetailCard;
