import connect from "./connectors.js";

const resolve = async () => {
  const { Subscription } = await connect();

  const resolvers = {
    Query: {
      subscriptions: async () => await Subscription.findAll(),
    },
  };

  return { resolvers };
};

export default resolve;
