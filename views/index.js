const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Importando os arquivos JS externos
const imagens = require("./public/imagens.js");


app.get("/", (req, res) => {
    res.render("login", {});
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro", {});
});

app.get("/menu", (req, res) => {
    res.render("menu", {});
});

app.get("/Tabela", (req, res) => {
    res.render("tabela", {});
});

app.get("/jogos", (req, res) => {
    res.render("jogos", {});
});

app.get("/noticias", (req, res) => {
    res.render("noticias", {});
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
