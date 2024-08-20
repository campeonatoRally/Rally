const express = require("express");
const pais_controller = require("./controller/pais.js");
const app = express();
const port = 3000;

app.use(express.json());

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

app.listen(port, () => {
    console.log("Gerenciador de rally executando na porta " + port);
})

app.put("/pais/:id", (req, res) => {
    const pais = req.body;
    const code = pais_controller.update(req.params.id, pais)
    res.status(code).json();
});

app.delete("/pais/:id", (req, res) => {
    pais_controller.destroy(req.params.id);
    res.json();
})