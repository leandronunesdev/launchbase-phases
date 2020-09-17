const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/60386045?s=460&u=b81d71f87ddbf5a2da61abf86227ede788de7d32&v=4",
        name: "Leandro Nunes",
        role: "Instrutor - Rocketseat",
        description: 'Programador front-end, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="http://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            {name: "Github", url: "https://github.com/leandronunesdev"},
            {name: "Twitter", url: "https://twitter.com/leandro_nunes"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/nunesprofissional/"}
        ]
    }
    return res.render("about", { about })
})

server.get("/portfolio", function(req, res){
    return res.render("portfolio", {items: videos})
})

server.listen(5000, function(){
    console.log("server is running")
})