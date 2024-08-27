const express = require("express");
const campeonato_controller = require("./controller/campeonato.js");
const categoria_controller = require("./controller/categoria.js");
const carro_controller = require("./controller/carro.js");
const cidade_controller = require("./controller/cidade.js");
const competidor_controller = require("./controller/competidor.js");
const equipe_controller = require("./controller/equipe.js");
const etapa_controller = require("./controller/etapa.js");
const fabricante_controller = require("./controller/fabricante.js");
const modelo_controller = require("./controller/modelo.js");
const pais_controller = require("./controller/pais.js");
const trecho_controller = require("./controller/trecho.js");
const tipoCompetidor_controller = require("./controller/tipoCompetidor.js");

const port = 4000;

const app = express();
app.use(express.json());

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

app.post("/competidor", (req, res) => {
  const competidor = req.body;
  const code = competidor_controller.store(competidor);
  res.status(code).json();
});

app.get("/competidor", (req, res) => {
  const competidores = competidor_controller.index();
  res.json(competidores);
});

app.get("/competidor/:id", (req, res) => {
  const competidor = competidor_controller.show(req.params.id);
  res.json(competidor);
});

app.put("/competidor/:id", (req, res) => {
  const competidor = req.body;
  const code = competidor_controller.update(req.params.id, competidor);
  res.status(code).json();
});

app.delete("/competidor/:id", (req, res) => {
  competidor_controller.destroy(req.params.id);
  res.json();
});

app.post("/cidade", (req, res) => {
  const cidade = req.body;
  const code = cidade_controller.store(cidade);
  res.status(code).json();
});

app.get("/cidade", (req, res) => {
  const cidades = cidade_controller.index();
  res.json(cidades);
});

app.get("/cidade/:id", (req, res) => {
  const cidade = cidade_controller.show(req.params.id);
  res.json(cidade);
});

app.put("/cidade/:id", (req, res) => {
  const cidade = req.body;
  const code = cidade_controller.update(req.params.id, cidade);
  res.status(code).json();
});

app.delete("/cidade/:id", (req, res) => {
  cidade_controller.destroy(req.params.id);
});

app.post("/fabricante", (req, res) => {
  const fabricante = req.body;
  const code = fabricante_controller.store(fabricante);
  res.status(code).json();
});

app.get("/fabricante", (req, res) => {
  const fabricantes = fabricante_controller.index();
  res.json(fabricantes);
});

app.get("/fabricante/:id", (req, res) => {
  const fabricante = fabricante_controller.show(req.params.id);
  res.json(fabricante);
});

app.put("/fabricante/:id", (req, res) => {
  const fabricante = req.body;
  const code = fabricante_controller.update(req.params.id, fabricante);
  res.status(code).json();
});

app.delete("/fabricante/:id", (req, res) => {
  fabricante_controller.destroy(req.params.id);
  res.json();
});

app.post("/modelo", (req, res) => {
  const modelo = req.body;
  const code = modelo_controller.store(modelo);
  res.status(code).json();
});

app.get("/modelo", (req, res) => {
  const modelos = modelo_controller.index();
  res.json(modelos);
});

app.get("/modelo/:id", (req, res) => {
  const modelo = modelo_controller.show(req.params.id);
  res.json(modelo);
});

app.put("/modelo/:id", (req, res) => {
  const modelo = req.body;
  const code = modelo_controller.update(req.params.id, modelo);
  res.status(code).json();
});

app.delete("/modelo/:id", (req, res) => {
  modelo_controller.destroy(req.params.id);
});

app.post("/tipoCompetidor", (req, res) => {
  const tipoCompetidor = req.body;
  const code = tipoCompetidor_controller.store(tipoCompetidor);
  res.status(code).json();
});

app.get("/tipoCompetidor", (req, res) => {
  const tipoCompetidores = tipoCompetidor_controller.index();
  res.json(tipoCompetidores);
});

app.get("/tipoCompetidor/:id", (req, res) => {
  const tipoCompetidor = tipoCompetidor_controller.show(req.params.id);
  res.json(tipoCompetidor);
});

app.put("/tipoCompetidor/:id", (req, res) => {
  const tipoCompetidor = req.body;
  const code = tipoCompetidor_controller.update(req.params.id, tipoCompetidor);
  res.status(code).json();
});

app.delete("/tipoCompetidor/:id", (req, res) => {
  tipoCompetidor_controller.destroy(req.params.id);
  res.json();
});

app.post("/etapa", (req, res) => {
    const etapa = req.body;
    const code = etapa_controller.store(etapa);
    res.status(code).json();
  });
  
  app.get("/etapa", (req, res) => {
    const etapas = etapa_controller.index();
    res.json(etapas);
  });
  
  app.get("/etapa/:id", (req, res) => {
    const etapa = etapa_controller.show(req.params.id);
    res.json(etapa);
  });
  
  app.put("/etapa/:id", (req, res) => {
    const etapa = req.body;
    const code = etapa_controller.update(req.params.id, etapa);
    res.status(code).json();
  });
  
  app.delete("/etapa/:id", (req, res) => {
    etapa_controller.destroy(req.params.id);
    res.json();
  });

  app.post("/carro", (req, res) => {
    const carro = req.body;
    const code = carro_controller.store(carro);
    res.status(code).json();
  });
  
  app.get("/carro", (req, res) => {
    const carros = carro_controller.index();
    res.json(carros);
  });
  
  app.get("/carro/:id", (req, res) => {
    const carro = carro_controller.show(req.params.id);
    res.json(carro);
  });
  
  app.put("/carro/:id", (req, res) => {
    const carro = req.body;
    const code = carro_controller.update(req.params.id, carro);
    res.status(code).json();
  });
  
  app.delete("/carro/:id", (req, res) => {
    carro_controller.destroy(req.params.id);
  });

app.post("/trecho", (req, res) => {
  const trecho = req.body;
  const code = trecho_controller.store(trecho);
  res.status(code).json();
});

app.get("/trecho", (req, res) => {
  const trechoes = trecho_controller.index();
  res.json(trechoes);
});

app.get("/trecho/:id", (req, res) => {
  const trecho = trecho_controller.show(req.params.id);
  res.json(trecho);
});

app.put("/trecho/:id", (req, res) => {
  const trecho = req.body;
  const code = trecho_controller.update(req.params.id, trecho);
  res.status(code).json();
});

app.delete("/trecho/:id", (req, res) => {
  trecho_controller.destroy(req.params.id);
  res.json();
});

app.post("/inscricao", (req, res) => {
  const inscricao = req.body;
  const code = inscricao_controller.store(inscricao);
  res.status(code).json();
});

app.get("/inscricao", (req, res) => {
  const inscricoes = inscricao_controller.index();
  res.json(inscricoes);
});

app.get("/inscricao/:id", (req, res) => {
  const inscricao = inscricao_controller.show(req.params.id);
  res.json(inscricao);
});

app.put("/inscricao/:id", (req, res) => {
  const inscricao = req.body;
  const code = inscricao_controller.update(req.params.id, inscricao);
  res.status(code).json();
});

app.delete("/inscricao/:id", (req, res) => {
  inscricao_controller.destroy(req.params.id);
  res.json();
});


app.listen(port, () => {
  console.log("Gerenciador de rally executando na porta " + port);
});
