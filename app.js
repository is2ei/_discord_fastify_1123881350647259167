import crypto from 'node:crypto'
import fastify from 'fastify'
import fastifyPassport from '@fastify/passport'
import fastifySecureSession from '@fastify/secure-session'

export function build (
  opts = {},
  strategy // For testing, pass mock strategy. For production, pass real strategy.
) {
  const app = fastify(opts)

  app.register(fastifySecureSession, { key: crypto.randomBytes(32) })
  app.register(fastifyPassport.initialize())

  fastifyPassport.use('local', strategy)

  app.get('/', { preValidation: fastifyPassport.authenticate('local', { session: false }) }, async function (request, reply) {
    return { hello: 'world' }
  })

  return app
}
