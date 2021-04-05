const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes_list = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("home")
})
 
/*
server.get("/receitas", function(req, res) {
    const id = req.params.id

    const receitas = recipes_list.find(function(receitas){
        return receitas.id == id
    }) 
    if(!receitas) {
        return res.send("Recipes not found!")
    }

    return res.render("receitas", { items: receitas })
   
})
*/
server.get("/recipes", function(req, res) {
    return res.render("recipes", { items: recipes_list})

})

server.get("/recipes/:id", function (req, res) {
    const id = req.params.id;
    const recipes = recipes_list[id]; // Array de receitas carregadas do data.js
  

return res.render('recipes', { recipes});

})

server.get("/sobre", function(req, res) {
    return res.render("about")
})

server.listen(5003, function() {
    console.log("server is running")
})


server.get("/receitas", function(req, res) {
    return res.render("receitas", { items: recipes_list})

})

server.get("/receitas/:id", function (req, res) {
    const id = req.params.id;
    const receitas = recipes_list[id]; // Array de receitas carregadas do data.js
  

return res.render('receitas', { receitas});

})



