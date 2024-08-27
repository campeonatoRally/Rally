const piloto_controller = require("./competidor.js");
const navegador_controller = require("./competidor.js");
const equipe_controller = require("./equipe.js");
const modelo_controller = require("./modelo.js");


const db = [];
let nextId = 1;

const model = (carro, id = nextId++, chassi) => {
  if (
    carro.chassi != undefined &&
    carro.chassi != "" &&
    carro.idPiloto != undefined &&
    carro.idNavegador != undefined &&
    carro.idEquipe != undefined &&
    carro.idModelo != undefined &&
    piloto_controller.show(carro.idPiloto) && 
    navegador_controller.show(carro.idNavegador) &&
    equipe_controller.show(carro.idEquipe) &&
    modelo_controller.show(carro.idModelo)
  ) {
    return {
      id: id,
      chassi: chassi.body,
      idPiloto: body.idPiloto,
      idNavegador: body.idNavegador,
      idEquipe: body.idEquipe,
      idModelo: body.idModelo,
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    db.push(novo);
    return 201;
  }

  return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
  const index = db.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    db[index] = novo;
    
    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = db.findIndex((el) => el.id == id);

  if (index != -1) {
    db.splice(index, 1);
  }
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
