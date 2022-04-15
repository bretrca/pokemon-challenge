import styled from "styled-components";

const PokemonContainer = styled.div`
  grid-area: "card";
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: 2px;
  padding: 5px;
  height: 150px;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(
    170deg,
    #ba0c2f 0%,
    #ba0c2f 44%,
    #262122 44%,
    #262122 56%,
    #fff 56%,
    #fff 100%
  );
  border: 6px solid black;
  border-radius: 100%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  position: relative;
`;
const PokemonTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0px;
  width: 100%;
  padding: 10px 0px;
  min-height: 20px;
  color: #fff;
`;
const PokemonImage = styled.img`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 200px;
`;
const ButtonContainer = styled.div`
  z-index: 100;
  position: absolute;
  display: block;
  width: 50px;
  height: 50px;
  opacity: 0;
  &:hover {
    transition-delay: 0.1s;
    opacity: 1;
    position: absolute;
    border-radius: 100%;
    display: block;
    width: 50px;
    height: 50px;
    color: green;
    background: #000;
    justify-content: center;
    text-align: center;
  }
`;
const Button = styled.button`
  position: absolute;
  top: calc(50% - 40px / 2);
  left: calc(50% - 40px / 2);
  display: block;
  background: #fff;
  color: #23d;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: double 5px #262122;
`;

export {
  PokemonContainer,
  PokemonTitle,
  PokemonImage,
  ButtonContainer,
  Button
};
