import React from "react";
import styled from "styled-components";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Display = (props) => {
  return (
    <>
      <Container>Display.</Container>
    </>
  );
};

export default Display;
