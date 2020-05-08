import gql from "graphql-tag";
const typeDefs = gql`
  type Query {
    subscriptions: [Subscription!]!
  }

  scalar Date

  type Subscription {
    id: ID!
    name: String!
    description: String
    first_bill: Date
    amount: Float!
    active: Boolean!
  }
`;

export default typeDefs;
