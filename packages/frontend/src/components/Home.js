import React from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = (props) => {
  return (
    <>
      <Container>Content.</Container>
    </>
  );
};

export default Home;
