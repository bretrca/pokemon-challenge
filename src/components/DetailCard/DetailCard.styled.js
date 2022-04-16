import styled from "styled-components";

const PokemonContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  align-items: center;
  width: 20rem;
  height: 23rem;
  background: linear-gradient(
    180deg,
    ${(props) => props.color} 0%,
    ${(props) => props.color} 20%,
    #262122 20%,
    #262122 25%,
    #fff 56%,
    #fff 100%
  );
  border: 6px solid ${(props) => props.color};
`;

const PokemonDescHeader = styled.h1`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
`;

const PokemonDescData = styled.img`
  padding: 1rem;
  margin: 0 auto;
  transform: scale(2);
`;
const PokemonDescriptionAbilities = styled.div`
  text-align: center;
`;

export {
  PokemonContainerDescription,
  PokemonDescData,
  PokemonDescHeader,
  PokemonDescriptionAbilities
};
