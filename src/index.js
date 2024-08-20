const express = require("express");
const categoria_controller = require("./categoria.js");
const app = express();
const port = 3000;

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
    const categoria = req.body
    const code = categoria_controller.update(req.params.id, categoria)
    res.status(code).json()
})

app.delete("/categoria/:id", (req, res) => {
    categoria_controller.destroy(req.params.id)
    res.json()
})
// GERENCIAMENTO DE categoriaS

app.listen(port, () => {
    console.log("Gerenciador de categorias executanto na porta " + port)
})