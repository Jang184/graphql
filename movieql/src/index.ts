import { createServer } from "graphql-yoga";
import { schema } from "./schema";
import { createContext } from "./context";

function main() {
  const server = createServer({ schema, context: createContext });
  server.start();
}

main();
