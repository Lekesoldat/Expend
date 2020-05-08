import React from "react";
import { Check, Plus } from "react-feather";
import simpleIcons from "simple-icons";
import styled from "styled-components";

const SubscriptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4rem;
  padding: 0.2rem 1rem;
  margin: 0.75rem 0rem;

  background: #${({ color }) => color};
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
    fill: ${({ theme }) => theme.text.primary};
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  & * {
    padding: 0.3rem;
  }
`;

export const ActiveSubscriptionCard = ({ subscription }) => {
  const icon = simpleIcons.get(subscription.name);
  return (
    <>
      <SubscriptionBox key={subscription.id} color={icon.hex}>
        <Left>
          <Icon
            color={icon.hex}
            dangerouslySetInnerHTML={{ __html: icon.svg }}
          />

          <div>{subscription.name}</div>
        </Left>

        <Right>{subscription.active ? <Check /> : <Plus />}</Right>
      </SubscriptionBox>
    </>
  );
};
