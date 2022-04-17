import styled from "styled-components";

const theme = {
  heigth: "12 rem"
};
const ListItemContainer = styled.div`
  display: flex;
  width: 80vw;
  height: ${(props) => props.theme.heigth};
  border-top: 1px solid #262122;
  justify-items: center;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: ${(props) => props.theme.heigth};
`;
const ImageItem = styled.img`
  min-width: 2rem;
  min-height: 1rem;
  opacity: 1;
  @media (min-width: 720px) {
    transform: scale(1.2);
  }
`;
const TitleItem = styled.h2`
  margin-left: 1rem;
  font-size: 1rem;
  @media (min-width: 720px) {
    font-size: 1.5rem;
  }
`;
const Button = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  display: block;
  background: #fff;
  color: #23d;
  border-radius: 100%;
  border: double 5px #262122;
`;
const ButtonContainer = styled.div`
  align-items: center;
  align-content: center;
  justify-content: center;
  height: ${(props) => props.theme.heigth};
`;

export {
  ListItemContainer,
  ImageItem,
  TitleItem,
  Button,
  ButtonContainer,
  ContentContainer
};
