import React from "react";
import styled from "styled-components";
// Might have stolen this from @fshauge aswell.

const Container = styled.div`
  padding-bottom: env(safe-area-inset-bottom);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.box.background};
  box-shadow: ${({ theme }) => theme.box.shadow};
  transition: all 0.35s ease-in-out;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(100%)")};
  opacity: ${(props) => (props.show ? "1" : "0")};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  cursor: pointer;
`;

const Title = styled.h4`
  margin: 0;
  line-height: 1.5rem;
`;

const Description = styled.p`
  margin: 0;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.text.secondary};
`;

const Toast = ({ show, onClick, title, description }) => {
  return (
    <Container show={show} onClick={onClick}>
      <Box>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Box>
    </Container>
  );
};

export default Toast;
