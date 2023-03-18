
const express = require("express");
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5500;


app.use(bodyParser.json());
app.use(cors()); 
app.use('/posts', postsRoutes);// un middleware pour les posts.


app.get('/', (_req, res)=>{
  res.send('Le server nodeJs avec Mongodb a bien demarre 🤙')
});


// Appel de tous les routes/ middlewaires
app.get('/', (_req, res)=>{
    res.send('posts');
  });

app.post('/:id', (_req, res, _next)=>{
    res.send('posts')
  });

app.put('/:id', (_req, res)=>{
  res.send('posts')
})

app.delete('/:id', (_req, res)=>{
  res.send('posts')
})


app.listen(port, () => 
    console.log(`server listening into port: ${port}`)
);

