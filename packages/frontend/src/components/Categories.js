import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";

const CATEGORY_QUERY = gql`
  query {
    categories {
      id
      title
      description
      expenses {
        title
      }
    }
  }
`;

const Category = styled.div`
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.box.shadow};
  padding: 1rem;
  margin: 1rem;
  background: ${({ theme }) => theme.info};
  color: ${({ theme }) => theme.text.primary};
`;

export const Categories = () => {
  const { loading, data } = useQuery(CATEGORY_QUERY);
  if (!loading) {
    return (
      <>
        <main>
          {data.categories.map((c) => (
            <Category>{c.title}</Category>
          ))}
        </main>
      </>
    );
  }
  return "Loading";
};
