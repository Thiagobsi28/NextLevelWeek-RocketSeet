const express = require("express")
const server = express()

// Pegar o banco de dados
const db = require("./database/db")

// configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true //Sem cache não use!!
})

//configurar caminhos para minha aplicação
//req = request
//res = response

server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um titulo"})

})

server.get("/create-point", (req, res) => {
    //req.query: Query Strings da nossa url
     return res.render("create-point.html")

})

server.post("/savepoint", (req, res) => {
    // req.body: o corpo do nosso formulario
    //console.log(req.body)
    //inserir dados no banco de dados

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
            
        ) VALUES (?,?,?,?,?,?,? );
        
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items

    ]

    function afterIsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no Cadastro! ")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", { saved: true })

    }

    db.run(query, values, afterIsertData)



    
})
//Pagina do search-results
server.get("/search", (req, res) => {
    
    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("search-results.html", { total: 0})
    }
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }

        const total = rows.length
        return res.render("search-results.html", {places: rows, total: total})
    })
   

})

//ligar o servidor na porta 3000
server.listen(3000)
