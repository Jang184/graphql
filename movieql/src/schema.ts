import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefinitions = `
type Query {
  info: String!
  feed: [Link!]!
}

type Mutation {
  postLink(url: String!, description: String!): Link!
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
  Mutation: {
    postLink: (parent: unknown, args: { description: string; url: string }) => {
      let idCount = links.length;

      const link: Link = {
        id: `juri-${idCount}`,
        description: args.description,
        url: args.url,
      };

      links.push(link);

      return link;
    },
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
