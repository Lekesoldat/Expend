import gql from "graphql-tag";
const typeDefs = gql`
  type Query {
    subscriptions: [Subscription!]!
    activeSubscriptions: [Subscription!]!
    subscriptionMetas: [SubscriptionMeta!]!
  }

  type Subscription {
    id: ID!
    name: String!
    description: String
    amount: Float!
    active: Boolean!
    subscriptionMeta: [SubscriptionMeta!]!
  }

  scalar Date

  type SubscriptionMeta {
    id: ID!
    start: String!
    interval: Int!
    repeat_year: Date!
    repeat_month: Date!
    repeat_week: Date!
    repeat_day: Date!
    subscription: Subscription!
  }
`;

export default typeDefs;
