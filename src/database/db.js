// importar a dependecia do SQlite 3

const sqlite3 = require("sqlite3").verbose()

// criar um objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

// exportar o banco de dados para ser utilizado em outro local

module.exports = db

// utilizar o objeto de bando de dados, para nossas operações

//db.serialize(() => {
   /* //Criar uma tabela com comandos SQL
    db.run(`
        CREATE TABLE IF NOT EXISTS places(
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           image TEXT,
           name TEXT,
           address TEXT,
           address2 TEXT,
           state TEXT,
           city TEXT,
           items TEXT

        );

    `)

    // 2 inserir dados na tabela
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
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"

    ]

    function afterIsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)

    }

    //db.run(query, values, afterIsertData)
     
    //3 consultar os dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão os seus registros: ")
        console.log(rows)
    })


    //4 deletar um dado na tabela

    db.run(` DELETE FROM places WHERE id = ? `, [1], function(){
        if(err){
            return console.log(err)
        }
        console.log("Registro Deletado com sucesso! ")
    })
}) */