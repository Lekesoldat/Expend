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
    unit: String!
    subscription: Subscription!
  }
`;

export default typeDefs;
