import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Box = styled.div`
  flex: 1;
  padding: 1rem;

  color: ${({ theme }) => theme.text.primary};

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  transform: ${({ show }) => (show ? "none" : "translateY(100vh)")};
  transition: 0.25s transform ease-in-out;

  overflow: auto;
  box-shadow: ${({ theme }) => theme.box.shadow};
  background: ${({ theme }) => theme.background.default};
`;

export const Modal = ({
  show,
  selector = "#modal-root",
  onClose,
  children,
}) => {
  return createPortal(
    <Box show={show}>{children}</Box>,
    document.querySelector(selector)
  );
};
