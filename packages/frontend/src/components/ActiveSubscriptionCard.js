import moment from "moment";
import React from "react";
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
  border-radius: 0.35rem;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  & h4 {
    margin: 0;
    padding: 0 1rem;
    color: ${({ theme }) => theme.text.primary};
  }

  & p  {
    margin: 0;
    padding: 0 1rem;
    color: ${({ theme }) => theme.text.secondary};
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
  flex-direction: column;
  align-items: flex-end;

  & h4 {
    margin: 0;
    font-weight: 500;
    color: ${({ theme }) => theme.text.primary};
  }

  & p  {
    margin: 0;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const calculateTotal = ({ amount, subscriptionMeta }) => {
  const { start, interval, unit } = subscriptionMeta[0];
  const totalPayments =
    interval * moment().endOf("day").diff(moment(start, "YYYY-MM-DD"), unit);

  return amount * totalPayments;
};

const translations = {
  year: {
    one: "year",
    many: (interval) => `${interval} years`,
  },
  month: {
    one: "month",
    many: (interval) => `${interval} months`,
  },
  week: {
    one: "week",
    many: (interval) => `${interval} weeks`,
  },
  day: {
    one: "day",
    many: (interval) => `${interval} day`,
  },
};

const translate = ({ unit, interval }) => {
  console.log(unit, interval);
  const { one, many } = translations[unit];
  return interval === 1 ? one : many(interval);
};

export const ActiveSubscriptionCard = ({
  subscription,
  subscription: { subscriptionMeta },
}) => {
  const icon = simpleIcons.get(subscription.name);
  return (
    <>
      <SubscriptionBox key={subscription.id} color={icon.hex}>
        <Left>
          <Icon
            color={icon.hex}
            dangerouslySetInnerHTML={{ __html: icon.svg }}
          />

          <div>
            <h4>{subscription.name}</h4>
            <p>{calculateTotal(subscription)},- total</p>
          </div>
        </Left>

        <Right>
          <h4>{subscription.amount},-</h4>
          <p>per {translate(subscriptionMeta[0])}</p>
        </Right>
      </SubscriptionBox>
    </>
  );
};
