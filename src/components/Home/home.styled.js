import styled from "styled-components";

const HomeContainerElements = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  grid-area: "home";
  display: grid;
  grid-template-areas: "card card";
  flex-direction: row;
  justify-content: space-around;
  height: 100%;

  @media (min-width: 720px) {
    grid-template-areas: "card card card";
    justify-content: space-around;
  }
  @media (min-width: 1020px) {
    grid-template-areas: "card card card card";
  }
  @media (min-width: 1200px) {
    grid-template-areas: "card card card card card";
  }
`;
const HomeContainerList = styled.div`
  display: grid;
  list-style-type: none;
`;
const UnorderedList = styled.ul`
  div {
    font-size: 1rem;
    font-weight: bold;
    display: grid;
    justify-content: space-around;
    text-align: center;
    grid-template-areas: ". . .";
  }
  @media (min-width: 360px) {
    font-size: 1.2rem;
  }
  @media (min-width: 720px) {
    font-size: 2rem;
  }
`;
const ButtonContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: columns;
`;
const ButtonSelection = styled.button`
  grid-area: "button";
  margin: auto 1rem;
  padding: 1rem;
  width: 42%;
`;
const Pagination = styled.div`
  display: grid;
  grid-template-areas: ". . .";
  margin: 0 auto;
  margin: 1rem 0;
  width: 70%;
  padding: 1rem 0;

  &.prev,
  &.next {
    width: 60px;
    padding: 1rem;
    background: blue;
  }
  ,
  &div {
    text-align: center;
  }
`;

export {
  HomeContainerElements,
  HomeContainerList,
  ButtonSelection,
  Pagination,
  ButtonContainer,
  UnorderedList
};
