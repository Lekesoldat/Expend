import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import { LoaderContainer } from "./LoaderContainer";
import { SubscriptionCard } from "./SubscriptionCard";

const SUBSCRIPTION_QUERY = gql`
  query {
    subscriptions {
      id
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

const AddSubscription = () => {
  const { loading, data } = useQuery(SUBSCRIPTION_QUERY);
  if (!loading) {
    return (
      <Container>
        {data.subscriptions.map((sub) => (
          <SubscriptionCard subscription={sub} />
        ))}
      </Container>
    );
  }
  return <LoaderContainer />;
};

export default AddSubscription;
