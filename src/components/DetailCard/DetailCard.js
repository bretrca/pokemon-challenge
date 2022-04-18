import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
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
    <div> {ability.ability.name} </div>
  ));
  const image = pokemonDetails.sprites.front_default;
  const bgcolorType = pokemonDetails.types.map((type) =>
    type.type.name.slice()
  );
  return (
    <>
      <PokemonContainerDescription
        key={`detail` + id}
        color={getTypeStyle(bgcolorType)}
      >
        <PokemonDescHeader>{pokemonDetails.name}</PokemonDescHeader>
        <PokemonDescData src={image} alt="from description sprite" />

        <PokemonDescriptionAbilities>
          <h3> Abilities:</h3>
          {abilities}
        </PokemonDescriptionAbilities>
      </PokemonContainerDescription>
      <Link>
        <Button onClick={() => history.goBack()}>Back</Button>
      </Link>
    </>
  );
};

export default DetailCard;
