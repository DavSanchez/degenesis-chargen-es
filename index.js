const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 5000
//const CharData = require("./src/character-data.js")

//const character = new CharData.DegenesisChar()

express()
    .use(express.static(path.join(__dirname, "public")))
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "ejs")
    .get("/", (req, res) => res.render("pages/index"))
    .get("/about", (req,res) => res.render("pages/about"))
    .get("/changes", (req,res) => res.render("pages/changes"))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
