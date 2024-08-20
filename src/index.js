const express = require("express");
const campeonato_controller = require("./controller/campeonato.js");
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

app.listen(port, () => {
    console.log("Gerenciador de rally executando na porta " + port);
})

app.put("/campeonato/:id", (req, res) => {
    const campeonato = req.body;
    const code = campeonato_controller.update(req.params.id, campeonato)
    res.status(code).json();
});

app.delete("/campeonato/:id", (req, res) => {
    campeonato_controller.destroy(req.params.id);
    res.json();
})