import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { DotLoader } from "react-spinners";
import styled from "styled-components";

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

  background: ${({ theme }) => theme.info};
  color: ${({ theme }) => theme.text.primary};
`;

export const Categories = () => {
  const { loading, data } = useQuery(CATEGORY_QUERY);
  if (!loading) {
    return (
      <Main>
        {data.categories.map((c) => (
          <Category>{c.title}</Category>
        ))}
      </Main>
    );
  }
  return (
    <Main>
      <DotLoader color="#36D7B7" />
    </Main>
  );
};
