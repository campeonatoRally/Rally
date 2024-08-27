const db = [];
let proximoId = 1;
const etapa = require("./etapa.js");

const model = (body, id = proximoId++) => {
  if (body.tempoPrevisto != undefined && 
    body.tempoPrevisto != "" && 
    etapa.show(body.idEtapa)
  ) {
    return {
      id: id,
      idEtapa: body.idEtapa,
      tempoPrevisto: body.tempoPrevisto
    };
  }
};

const store = (body) => {
  const elemento = model(body);
  if (elemento) {
    db.push(elemento);
    return 201;
  }
  return 400;
};

const show = (id) => db.find((el) => id == el.id);

const index = () => db;

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
  show,
  index,
  update,
  destroy,
};