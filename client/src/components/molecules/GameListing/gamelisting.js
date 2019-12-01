import React from "react";
import styled from "styled-components";
import { Title } from "../../atoms/Typography";

const GameTitle = styled(Title)`
  margin-left: 8px;
`;

export const GameListing = ({ gameTitle }) => {

  return (
      <>
        <GameTitle>{gameTitle}</GameTitle>
      </>
  );
};