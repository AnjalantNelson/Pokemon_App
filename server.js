const express = require('express')
const app = express();
const port = 3000
const pokemon = require('./models/pokemon')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//This is where routes go
app.get('/', (req, res) => {
    res.render('Index', {
        pokemon: pokemon
    })
});

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

//Show route
app.get('/pokemon/:id', (req, res) => {
    res.send(pokemon(req.param.id))
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
})




app.listen(port, () => {
    console.log(`listening on ${port}`)
})