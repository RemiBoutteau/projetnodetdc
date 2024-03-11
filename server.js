let express = require('express')
let app = express()
let port = 3000

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/www' ) ) 
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js' ))
app.use( '/css' , express.static(__dirname + '/node_modules/bootstrap/dist/css' ))
app.use('/views', express.static(__dirname+'/views'))

let myobject = {
    nom: "mon objet",
    valeur: 10
}

app.listen(port, ()=> {
    console.log('Le serveur est en route')
    console.log(`Server listening at http://localhost:${port}`)
})

app.get('/', (req, res, next) => {
    res.render('index.ejs', {monobjet: myobject})
})

app.get('/page2', (req, res, next) => {
    res.render('page2.ejs')
})