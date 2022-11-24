import "reflect-metadata";

import path from "node:path";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolvers/appoitments-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      AppointmentsResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'), 
  })

  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen()

  console.log(`\u{1F680} HTTP server running on ${url}`)
}

bootstrap();