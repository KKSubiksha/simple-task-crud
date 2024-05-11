import Fastify from 'fastify'
import { routes } from './routes.js';

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async function (request, reply) {
  return reply.send({ message: 'API root domain' })
})

routes.forEach((route) => {
  fastify.route(route)
});


fastify.listen({ port: 4000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})