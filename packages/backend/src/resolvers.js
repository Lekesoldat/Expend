import Sequelize from "sequelize";
import connect from "./connectors.js";

const resolve = async () => {
  const { Category, Expense } = await connect();

  const resolvers = {
    Query: {
      categories: async () => await Category.findAll({ include: Expense }),
      expenses: async () => await Expense.findAll({ include: Category }),
      subscriptions: async () =>
        await Expense.findAll({
          where: {
            isSubscription: {
              [Sequelize.Op.is]: true,
            },
          },
        }),
    },
  };

  return { resolvers };
};

export default resolve;
