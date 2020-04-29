import React from "react";
import styled from "styled-components";

const Box = styled.div`
  border-radius: 0.75rem;
  margin: 1rem;
  background: ${({ theme, type }) => theme[type]};
  color: ${({ theme }) => theme.text.primary};
  box-shadow: ${({ theme }) => theme.box.shadow};
  padding: 1rem;

  &:hover {
    background: ${({ theme }) => theme.action.hover};
  }
`;

const Display = () => {
  return (
    <>
      <Box type="primary">I'm a primary box!</Box>
      <Box type="secondary">I'm a secondary box!</Box>
      <Box type="error">I'm an error box!</Box>
      <Box type="warning">I'm a warning box!</Box>
      <Box type="info">I'm an info box!</Box>
      <Box type="success">I'm a success box!</Box>
    </>
  );
};

export default Display;
