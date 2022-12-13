require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = 3000
const pokemon = require('./models/pokemon')

//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}))

//connect to mongoose / remove depreciation
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', ()=>{
  console.log('connected to mongo');
})


//////////This is where routes go/////////////

//index
app.get('/pokemon', (req, res) => {
    //find all pokemon
    pokemon.find({}, (error, allPokemon) => {
        res.render('pokemon/Index', {
            pokemon: allPokemon
        })
    })
})


//new route
app.get('/pokemon/new', (req, res) => {
    res.render('pokemon/new')
})

//Post
app.post('/pokemon', (req, res) => {
    if(req.body.readyToEvolve === "on") {
        req.body.readyToEvolve = true
    } else {
        req.body.readyToEvolve = false
    }
    pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})

//Show route
app.get('/pokemon/:id', (req, res) => {
    pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('pokemon/Show', {
            pokemon : findPokemon
        })
    })
})





app.listen(port, () => {
    console.log(`listening on ${port}`)
})