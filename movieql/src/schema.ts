import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefinitions = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`;

type Link = {
  id: string;
  url: string;
  description: string;
};

const links: Link[] = [
  {
    id: "juri",
    url: "https://jang184.github.io",
    description: "juri's blog",
  },
];

const resolvers = {
  Query: {
    info: () => `This is the very first API I've made`,
    feed: () => links,
  },

  Link: {
    id: (parent: Link) => parent.id,
    description: (parent: Link) => parent.description,
    url: (parent: Link) => parent.url,
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
