import passport from 'passport-strategy'
import { test } from 'tap'
import { build } from './app.js'

test('default root route', async (t) => {
  function MockStrategy () {
    passport.Strategy.call(this)
  }

  MockStrategy.prototype.authenticate = function () {
    this.success({})
  }

  const app = build(
    { logger: false },
    new MockStrategy()
  )

  const response = await app.inject({
    url: '/'
  })

  t.equal(response.statusCode, 200)
  t.same(response.json(), { hello: 'world' })
})
