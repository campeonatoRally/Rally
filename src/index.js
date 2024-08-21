const express = require("express");
const categoria_controller = require("./controller/categoria.js");
const campeonato_controller = require("./controller/campeonato.js");
const pais_controller = require("./controller/pais.js");
const equipe_controller = require("./controller/equipe.js");
const app = express();
const port = 5000;

app.use(express.json());

// GERENCIAMENTO DE categoriaS
app.post("/categoria", (req, res) => {
  const categoria = req.body;
  const code = categoria_controller.store(categoria);
  res.status(code).json();
});

app.get("/categoria", (req, res) => {
  const categorias = categoria_controller.index();
  res.json(categorias);
});

app.get("/categoria/:id", (req, res) => {
  const categoria = categoria_controller.show(req.params.id);
  res.json(categoria);
});

app.put("/categoria/:id", (req, res) => {
  const categoria = req.body;
  const code = categoria_controller.update(req.params.id, categoria);
  res.status(code).json();
});

app.delete("/categoria/:id", (req, res) => {
  categoria_controller.destroy(req.params.id);
  res.json();
});

app.post("/campeonato", (req, res) => {
  const campeonato = req.body;
  const code = campeonato_controller.store(campeonato);
  res.status(code).json();
});

app.get("/campeonato", (req, res) => {
  const campeonatos = campeonato_controller.index();
  res.json(campeonatos);
});

app.get("/campeonato/:id", (req, res) => {
  const campeonato = campeonato_controller.show(req.params.id);
  res.json(campeonato);
});

app.put("/campeonato/:id", (req, res) => {
  const campeonato = req.body;
  const code = campeonato_controller.update(req.params.id, campeonato);
  res.status(code).json();
});

app.delete("/campeonato/:id", (req, res) => {
  campeonato_controller.destroy(req.params.id);
});

app.post("/pais", (req, res) => {
  const pais = req.body;
  const code = pais_controller.store(pais);
  res.status(code).json();
});

app.get("/pais", (req, res) => {
  const paises = pais_controller.index();
  res.json(paises);
});

app.get("/pais/:id", (req, res) => {
  const pais = pais_controller.show(req.params.id);
  res.json(pais);
});

app.put("/pais/:id", (req, res) => {
  const pais = req.body;
  const code = pais_controller.update(req.params.id, pais);
  res.status(code).json();
});

app.delete("/pais/:id", (req, res) => {
  pais_controller.destroy(req.params.id);
  res.json();
});

app.post("/equipe", (req, res) => {
  const equipe = req.body;
  const code = equipe_controller.store(equipe);
  res.status(code).json();
});

app.get("/equipe", (req, res) => {
  const equipes = equipe_controller.index();
  res.json(equipes);
});

app.get("/equipe/:id", (req, res) => {
  const equipe = equipe_controller.show(req.params.id);
  res.json(equipe);
});

app.put("/equipe/:id", (req, res) => {
  const equipe = req.body;
  const code = equipe_controller.update(req.params.id, equipe);
  res.status(code).json();
});

app.delete("/equipe/:id", (req, res) => {
  equipe_controller.destroy(req.params.id);
  res.json();
});

app.listen(port, () => {
  console.log("Gerenciador de rally executando na porta " + port);
});
