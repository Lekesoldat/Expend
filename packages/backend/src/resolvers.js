import Sequelize from "sequelize";
import connect from "./connectors.js";

const resolve = async () => {
  const { Subscription } = await connect();

  const resolvers = {
    Query: {
      subscriptions: async () => await Subscription.findAll(),
      activeSubscriptions: async () =>
        await Subscription.findAll({
          where: {
            active: {
              [Sequelize.Op.is]: true,
            },
          },
        }),
    },
  };

  return { resolvers };
};

export default resolve;
