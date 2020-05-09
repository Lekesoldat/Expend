import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import { ActiveSubscriptionCard } from "./ActiveSubscriptionCard";
import { LoaderContainer } from "./LoaderContainer";

const ACTIVE_SUBSCRIPTIONS_QUERY = gql`
  query {
    activeSubscriptions {
      id
      name
      description
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

const ActiveSubscriptions = () => {
  const { loading, data } = useQuery(ACTIVE_SUBSCRIPTIONS_QUERY);
  if (!loading) {
    return (
      <Container>
        {data.activeSubscriptions.map((sub) => (
          <ActiveSubscriptionCard subscription={sub} />
        ))}
      </Container>
    );
  }
  return <LoaderContainer />;
};

export default ActiveSubscriptions;
