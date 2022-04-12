import styled from "styled-components";

const PokemonContainer = styled.div`
grid-area:"card";
  display: flex;
  flex-direction: column;
  width: 50%;
  padding:5px;
  max-height: 30vh;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  text-align:center;
  background: #3456;
  border-radius: 6px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
`;
const PokemonTitle = styled.div`
  margin: 0px;
  width: 100%;
  padding: 10px 0px;
  min-height: 20px;
  color: #fff;
  background-color: #343f;
`;
const PokemonImage = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #000;
`;
const ButtonContainer = styled.div`
display:flex;
  height: 50px;
  width: 200px;
  color: green;
  justify-content:center;
text-align: center;

`;
const Button = styled.button`
  background: #343f;
  color: #fff;
  min-height: 25px;
`;

export {
  PokemonContainer,
  PokemonTitle,
  PokemonImage,
  ButtonContainer,
  Button
};
