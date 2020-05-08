import React from "react";
import { DotLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoaderContainer = () => (
  <Container>
    <DotLoader color="#36D7B7" />
  </Container>
);
