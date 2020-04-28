import { ApolloServer } from "apollo-server";
import { Sequelize } from "sequelize";

const main = async () => {
  const sequelize = new Sequelize(
    "postgres://magnusholtet@localhost:5432/rentspend"
  );

  const typeDefs = gql`
    type Query {
      categories: [Category!]!
      expenses: [Expense!]!
      categorylist: CategoryList
    }
    type Mutation {
      createCategory(title: String!, description: String!): Category
      createExpense(
        title: String!
        description: String!
        amount: Float!
        categoryId: ID!
      ): Expense
    }
    type Category {
      id: ID!
      title: String!
      description: String!
      expenses: [Expense!]!
    }
    type Expense {
      id: ID!
      title: String!
      description: String!
      amount: Float!
      category: Category!
    }
    type CategoryList {
      count: Int!
      elements: [Category!]!
    }
  `;

  const resolvers = {
    Query: {
      categorylist: async () => {
        const [elements, count] = await Category.findAndCount();
        return { count, elements };
      },
      expenses: async () => await Expense.find(),
      categories: async () => await Category.find(),
    },
    Mutation: {
      createCategory: (parent, { title, description }) =>
        Category.create({ title, description }).save(),
      createExpense: (parent, { title, description, amount, categoryId }) =>
        Expense.create({
          title,
          description,
          amount,
          category: categoryId,
        }).save(),
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.listen(4500);
};

main();
