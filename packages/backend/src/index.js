import apollo from "apollo-server-express";
import cors from "cors";
import express from "express";
import resolve from "./resolvers.js";
import typeDefs from "./typeDefs.js";
const { ApolloServer } = apollo;

const main = async () => {
  const { resolvers } = await resolve();

  const app = express();

  app.use(
    cors({
      origin: "*",
    })
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
  });

  server.applyMiddleware({ app });

  app.listen(
    {
      port: process.env.NODE_ENV === "development" ? 4500 : process.env.PORT,
    },
    () => {
      console.log(`🚀 Server ready!`);
    }
  );
};

main();
