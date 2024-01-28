//carregando modulos
const express = require('express')
const app = express()
const admin = require("./routes/admin")
const path = require("path")
//configuracoes
    //banco

    //public
    app.use(express.static(path.join(__dirname,public)))
//rotas
    

//outros
const PORT = 8081
app.listen(PORT,()=>{
    console.log("Servidor rodando!")
})