import path from 'path'
import express from 'express'

const app = express()
const HTML_FILE = path.join('index.html')
const DEFAULT_PORT  = 8080

app.set('port', process.env.PORT || DEFAULT_PORT);
app.use(express.static('.'));

app.get('*', (req, res) => {
  console.log("Handling request.")
  res.sendFile(HTML_FILE)
});

console.log(`Starting server on port ${app.get('port')}...`)
app.listen(app.get('port'));
