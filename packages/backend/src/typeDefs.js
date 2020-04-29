import gql from "graphql-tag";
const typeDefs = gql`
  type Query {
    categories: [Category!]!
    expenses: [Expense!]!
    subscriptions: [Expense!]!
  }

  type Category {
    id: ID!
    title: String!
    description: String
    expenses: [Expense!]!
  }

  type Expense {
    id: ID!
    title: String!
    description: String
    amount: Float!
    category: Category!
    isSubscription: Boolean!
  }
`;

export default typeDefs;
