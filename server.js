import { build } from './app.js'
import LocalStrategy from 'passport-local'

const server = build(
  { logger: true },
  new LocalStrategy(
    function (username, password, done) {
      return done(null, {})
    }
  )
)

try {
  await server.listen({ port: 3000 })
} catch (err) {
  server.log.error(err)
  process.exit(1)
}
