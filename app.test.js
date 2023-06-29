import { test } from 'tap'
import { build } from './app.js'

test('default root route', async (t) => {
  const app = build({ logger: false })
  
  const response = await app.inject({
    url: '/'
  })

  t.equal(response.statusCode, 200)
  t.same(response.json(), { hello: "world" })
})
