import { app } from './app'
import { env } from './env'
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
