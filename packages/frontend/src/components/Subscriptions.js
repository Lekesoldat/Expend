import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { DotLoader } from "react-spinners";
import styled from "styled-components";

const GRADIENTS = [
  "linear-gradient(to left, #feb47b, #ff7e5f);",

  "linear-gradient(to left, #7f7fd5, #86a8e7, #91eae4)",

  "linear-gradient(to right, #fbc7d4, #9796f0)",

  "linear-gradient(to left, #86fde8, #acb6e5)",

  "linear-gradient(to right, #ffa751, #ffe259)",
];

const SUBSCRIPTION_QUERY = gql`
  query {
    subscriptions {
      id
      icon
      color
      name
      description
      first_bill
      amount
      active
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: min-content;
`;

const Category = styled.div`
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
  background: ${({ bg_color }) => bg_color};
  color: ${({ theme }) => theme.text.primary};
`;

export const Subscriptions = () => {
  const { loading, data } = useQuery(SUBSCRIPTION_QUERY);
  if (!loading) {
    return (
      <Container>
        {data.subscriptions.map((s) => {
          console.log(s);
          return <Category bg_color={s.color}>{s.name}</Category>;
        })}
      </Container>
    );
  }
  return (
    <Container>
      <DotLoader color="#36D7B7" />
    </Container>
  );
};
