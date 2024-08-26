const piloto_controller = require("./piloto.js");
const equipe_controller = require("./equipe.js");
const modelo_controller = require("./modelo.js");

const db = [];
let nextId = 1;

const model = (carro, id = nextId++, potencia, descricao) => {
  if (
    carro.chassi != undefined &&
    carro.chassi != "" &&
    carro.piloto_id != undefined &&
    carro.equipe_id != undefined &&
    carro.modelo_id != undefined &&
    piloto_controller.show(carro.piloto_id) &&
    equipe_controller.show(carro.equipe_id) &&
    modelo_controller.show(carro.modelo_id)
  ) {
    return {
      id,
      chassi,
      piloto_id: carro.piloto_id,
      equipe_id: carro.equipe_id,
      modelo_id: carro.modelo_id,
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
