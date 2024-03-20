import express from 'express'

const app = express()
const port = 3000

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Express app Listening on port ${port}`)
})
