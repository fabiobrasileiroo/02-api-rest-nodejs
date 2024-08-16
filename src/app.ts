import fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/trasactions'

export const app = fastify()

app.register(fastifyCookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.get('/', async () => {
  return 'Hello World'
})
