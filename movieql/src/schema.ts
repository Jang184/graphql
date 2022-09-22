import { makeExecutableSchema } from "@graphql-tools/schema";

// GraphQL schema definition
const typeDefinitions = `
type Query {
  hello: String!
}
`;

// actual implementation of the GraphQL schema
const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

// a combination of the GraphQL SDL and the resolvers
// gluing them together into an executable schema
export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
