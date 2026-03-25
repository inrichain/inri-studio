import { createServer } from 'http'
import { env } from './config/env'
import { healthRoute } from './routes/health'
import { pricingRoute } from './routes/pricing'
import { uploadSignRoute } from './routes/upload-sign'

const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  if (url.pathname === '/health') {
    res.end(JSON.stringify(healthRoute()))
    return
  }

  if (url.pathname === '/pricing') {
    res.end(JSON.stringify(pricingRoute(url)))
    return
  }

  if (url.pathname === '/upload-sign' && req.method === 'POST') {
    res.end(JSON.stringify(await uploadSignRoute()))
    return
  }

  res.statusCode = 404
  res.end(JSON.stringify({ error: 'Not found' }))
})

server.listen(env.port, () => {
  console.log(`upload-api listening on http://localhost:${env.port}`)
})
