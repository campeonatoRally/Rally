const carro_controller = require("./carro.js");
const trecho_controller = require("./trecho.js");

const db = [];

const model = (percurso, tempoPercurso, quantPontos) => {
  if (
    percurso.tempoPercurso != undefined &&
    percurso.tempoPercurso != "" &&
    percurso.quantPontos != undefined &&
    percurso.quantPontos != quantPontos(isNaN) &&
    percurso.carro_id != undefined &&
    percurso.trecho_id != undefined &&
    carro_controller.show(percurso.carro_id) &&
    trecho_controller.show(percurso.trecho_id)
  ) {
    return {
      chassi,
      tempoPercurso,
      quantPontos,
      carro_id: percurso.carro_id,
      trecho_id: percurso.trecho_id,
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
