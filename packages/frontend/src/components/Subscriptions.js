import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";
import { Plus } from "react-feather";
import { DotLoader } from "react-spinners";
import simpleIcons from "simple-icons";
import styled from "styled-components";

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

const Subscription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4rem;
  padding: 0.2rem 1rem;
  margin: 0.75rem 0rem;

  border: 2px solid #${({ color }) => color};
  border-radius: 0.55rem;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  & * {
    padding: 0.3rem;
  }
`;

const Icon = styled.div`
  & svg {
    height: 1.75rem;
    width: 1.75rem;
    fill: #${({ color }) => color};
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  & * {
    padding: 0.3rem;
  }
`;

export const Subscriptions = () => {
  const { loading, data } = useQuery(SUBSCRIPTION_QUERY);
  if (!loading) {
    return (
      <Container>
        {data.subscriptions.map((sub) => {
          const icon = simpleIcons.get(sub.name);

          return (
            <Subscription key={sub.id} color={icon.hex}>
              <Left>
                <Icon
                  color={icon.hex}
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                />

                <div>{sub.name}</div>
              </Left>

              <Right>
                <Plus />
              </Right>
            </Subscription>
          );
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
