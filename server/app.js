const fs = require('fs')
const path = require('path')

const colors = require('colors/safe')
const restify = require('restify')

server = restify.createServer()

server.get('/products', (_, res) => {
  const filePath = 'data/products.json'
  fs.readFile(path.resolve(__dirname, filePath), 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return res.send(500, new Error('File could not be Read'))
    }
    const parsed = JSON.parse(data)
    res.json(parsed)
  })
})

const port = process.env.PORT || 8080

server.listen(port, (err) => {
  if (err) { return console.log(colors.red('Could not start the server :(')) }
  console.log(colors.green(`Server listening on http://localhost:${port} :)`))
})
