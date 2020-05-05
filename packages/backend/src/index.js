import apollo from "apollo-server-express";
import cors from "cors";
import express from "express";
import resolve from "./resolvers.js";
import typeDefs from "./typeDefs.js";
const { ApolloServer } = apollo;

const main = async () => {
  const { resolvers } = await resolve();

  const app = express();
  console.log(app);

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

  server.applyMiddleware(app);

  app.listen(process.env.PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

main();
