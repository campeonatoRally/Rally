const pais_controller = require("./pais.js");

const db = [];
let nextId = 1;

const model = (cidade, id = nextId++) => {
  if (
    cidade.nome != undefined &&
    cidade.nome != "" &&
    cidade.pais_id != undefined &&
    pais_controller.show(cidade.pais_id)
  ) {
    return {
      id,
      nome: cidade.nome,
      idPais: cidade.idPais,
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
