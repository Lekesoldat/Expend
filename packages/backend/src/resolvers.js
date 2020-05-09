import Sequelize from "sequelize";
import connect from "./connectors.js";

const resolve = async () => {
  const { Subscription, SubscriptionMeta } = await connect();

  const resolvers = {
    Query: {
      subscriptions: async () =>
        await Subscription.findAll({ include: SubscriptionMeta }),
      activeSubscriptions: async () =>
        await Subscription.findAll({
          include: SubscriptionMeta,
          where: {
            active: {
              [Sequelize.Op.is]: true,
            },
          },
        }),
      subscriptionMetas: async () =>
        await SubscriptionMeta.findAll({ include: Subscription }),
    },
  };

  return { resolvers };
};

export default resolve;
