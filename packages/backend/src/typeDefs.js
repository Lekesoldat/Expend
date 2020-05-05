import gql from "graphql-tag";
const typeDefs = gql`
  type Query {
    expenseCategories: [ExpenseCategory!]!
    incomeCategories: [IncomeCategory!]!
    incomes: [Income!]!
    expenses: [Expense!]!
    subscriptions: [Expense!]!
    regularIncome: [Income!]!
  }

  type ExpenseCategory {
    id: ID!
    title: String!
    description: String
    expenses: [Expense!]!
  }

  type IncomeCategory {
    id: ID!
    title: String!
    description: String
    incomes: [Income!]!
  }

  type Expense {
    id: ID!
    title: String!
    description: String
    amount: Float!
    category: ExpenseCategory!
    isSubscription: Boolean!
  }

  type Income {
    id: ID!
    title: String!
    description: String
    amount: Float!
    category: IncomeCategory!
    isRegularIncome: Boolean!
  }
`;

export default typeDefs;
