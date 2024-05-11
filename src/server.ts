import fastify from "fastify";
import cookie from '@fastify/cookie'

import { env } from "./env";
import { transactionsRoutes } from "./routes/transactions";

const app = fastify();
app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})
//porta 3333 para ele ouvir
// esse listen retornar um promise e quando ela ser concluida
// posso fazer uma ação com essa função
app
  .listen({
    port: env.PORT
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
