import React, { useEffect, useState } from "react";
import {
  ListItemContainer,
  ImageItem,
  TitleItem,
  Button,
  ButtonContainer,
  ContentContainer
} from "./List.styled";
const List = ({ url, name }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAttributes(url);
  }, [url]);
  const fetchAttributes = async (url) => {
    fetch(`${url}`, { method: "GET" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        return setData(res);
      });
  };
  const clickHandler = () => {
    console.log("click");
  };
  if (!data) return null;

  return (
    <li>
      <ListItemContainer>
        <ContentContainer>
          <TitleItem>{name}</TitleItem>
        </ContentContainer>
        <ImageItem
          src={data.sprites.front_default}
          alt={"image of " + { name }}
        />
        <ButtonContainer>
          <Button
            onClick={() => clickHandler(url)}
            type="button"
            autoFocus
          ></Button>
        </ButtonContainer>
      </ListItemContainer>
    </li>
  );
};

export default List;
