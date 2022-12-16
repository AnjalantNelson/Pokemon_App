require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = 3000
const Pokemon = require('./models/pokemon')
const methodOverride = require('method-override')

//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))

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

// INDEX ROUTING //
app.get("/", (req, res) => {
    //find all fruits
    Pokemon.find({}, (error, allPokemon)=>{
      res.render('Index', {
        Pokemon: allPokemon
      })
    }) 
  });

// NEW ROUTING //
app.get("/New", (req, res) => {
    res.render('New')
});

// POST ROUTING //
app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect("/");
    });
})

// SHOW ROUTING //
app.get( '/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('pokemon/Show', {
            pokemon: foundPokemon
        })
    })
});

// EDITING ROUTING //
app.get('/pokemon/:id/Edit', (req, res)=> {
    // finding pokemon by ID
    // render an edit form
    // pass in the pokemon data "payload"
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('pokemon/Edit', {
            pokemon: foundPokemon
        })
    })
})
// UPDATE ROUTING //
app.put('/pokemon/:id', (req, res) => {
    // find the pokemon by ID and update
    // redirect to the pokemon's show page
    Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) => {
        console.log(updatedPokemon)
        res.redirect(`/pokemon/${req.params.id}`)
    })
})

// DELETE ROUTING //
app.delete('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndRemove(req.params.id, (err, deletedPokemon) => {
        res.redirect('/')
    })
});



app.listen(port, () => {
    console.log(`listening on ${port}`)
})