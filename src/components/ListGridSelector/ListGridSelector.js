import React from "react";
import { ButtonContainer, ButtonSelection } from "./ListGridSelector.styled";

const ListGridSelector = ({ setIsGrid }) => {
  const listGridSwitch = (value) => {
    return setIsGrid(value);
  };
  return (
    <ButtonContainer>
      <ButtonSelection onClick={() => listGridSwitch(false)}>
        LIST
      </ButtonSelection>
      <ButtonSelection onClick={() => listGridSwitch(true)}>
        GRID
      </ButtonSelection>
    </ButtonContainer>
  );
};

export default ListGridSelector;
