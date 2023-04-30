const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors())
const port = process.env.PORT || 5000
const categories = require('./data/categories.json')
app.get('/', (req, res) => {
  res.send('Eagle is Flying')
})
// getting categories
app.get('/categories', (req, res) => {
    res.send(categories)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})