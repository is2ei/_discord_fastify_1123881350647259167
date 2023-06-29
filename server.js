import { build } from './app.js'

const server = build({
  logger: true
})

try {
  await server.listen({ port: 3000 })
} catch (err) {
  server.log.error(err)
  process.exit(1)
}
