const express = require("express");
const campeonato_controller = require("./controller/campeonato.js");
const pais_controller = require("./controller/pais.js");
const app = express();
const port = 3000;

app.use(express.json());

app.post('/campeonato', (req, res) => {
    const campeonato = req.body;
    const code = campeonato_controller.store(campeonato);
    res.status(code).json()
});

app.get('/campeonato', (req, res) => {
    const campeonatos = campeonato_controller.index();
    res.json(campeonatos);
});

app.get("/campeonato/:id", (req, res) => {
    const campeonato = campeonato_controller.show(req.params.id);
    res.json(campeonato);
});

app.put("/campeonato/:id", (req, res) => {
    const campeonato = req.body;
    const code = campeonato_controller.update(req.params.id, campeonato)
    res.status(code).json();
});

app.delete("/campeonato/:id", (req, res) => {
    campeonato_controller.destroy(req.params.id);
});

app.post('/pais', (req, res) => {
    const pais = req.body;
    const code = pais_controller.store(pais);
    res.status(code).json()
});

app.get('/pais', (req, res) => {
    const paises = pais_controller.index();
    res.json(paises);
});

app.get("/pais/:id", (req, res) => {
    const pais = pais_controller.show(req.params.id);
    res.json(pais);
});

app.put("/pais/:id", (req, res) => {
    const pais = req.body;
    const code = pais_controller.update(req.params.id, pais)
    res.status(code).json();
});

app.delete("/pais/:id", (req, res) => {
    pais_controller.destroy(req.params.id);
    res.json();
})

app.listen(port, () => {
    console.log("Gerenciador de rally executando na porta " + port);
});