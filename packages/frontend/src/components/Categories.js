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

const CATEGORY_QUERY = gql`
  query {
    expenseCategories {
      id
      title
      description
      expenses {
        title
      }
    }
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  

  /* background: ${({ theme }) => theme.info}; */
  background: ${({ gradient }) => gradient};
  color: ${({ theme }) => theme.text.primary};
`;

export const Categories = () => {
  const { loading, data } = useQuery(CATEGORY_QUERY);
  if (!loading) {
    return (
      <Main>
        {data.expenseCategories.map((c) => {
          const color = GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)];
          return <Category gradient={color}>{c.title}</Category>;
        })}
      </Main>
    );
  }
  return (
    <Main>
      <DotLoader color="#36D7B7" />
    </Main>
  );
};
