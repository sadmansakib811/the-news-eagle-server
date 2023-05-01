const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors())
const port = process.env.PORT || 5000


const categories = require('./data/categories.json');
const news = require('./data/news.json')



app.get('/', (req, res) => {
  res.send('Eagle is Flying')
})
// getting categories
app.get('/categories', (req, res) => {
    res.send(categories)
  })

// getting news.json data:
app.get('/news',(req, res)=>{
  res.send(news)
})

app.get('/news/:id',(req, res)=>{
  const id = req.params.id;
  console.log(id);
  const selectedNews = news.find(n=> n._id===id);
  res.send(selectedNews)
})

app.get('/categories/:id',(req, res)=>{
  const id = req.params.id;
  console.log(id);
  if(id == 0){
    res.send(news);
  }
  else{
    const selectedCategory = news.filter( n=> n.category_id === id );
  res.send(selectedCategory);
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})