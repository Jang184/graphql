import { createServer } from "graphql-yoga";
import { schema } from "./schema";

function main() {
  const server = createServer({ schema });
  server.start();
}

main();
