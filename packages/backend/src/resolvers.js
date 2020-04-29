import Sequelize from "sequelize";
import connect from "./connectors.js";

const resolve = async () => {
  const { Category, Expense } = await connect();

  const resolvers = {
    Query: {
      categories: async () => {
        const data = await Category.findAll({ include: Expense });
        console.log(JSON.stringify(data, null, 2));
        return data;
      },
      expenses: async () => {
        const data = await Expense.findAll({ include: Category });
        console.log(JSON.stringify(data, null, 2));
        return data;
      },
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
