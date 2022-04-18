import styled from "styled-components";

const ButtonContainer = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: columns;
`;
const ButtonSelection = styled.button`
  grid-area: "button";
  margin: auto 1rem;
  padding: 1rem;
  width: 42%;
  border-radius: 1%;
  box-shadow: 2px -2px teal;
  background-color: #ffd;
`;

export { ButtonContainer, ButtonSelection };
