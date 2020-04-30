import apollo from "apollo-server";
import resolve from "./resolvers.js";
import typeDefs from "./typeDefs.js";
const { ApolloServer } = apollo;

const main = async () => {
  const { resolvers } = await resolve();

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen(4500).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

main();