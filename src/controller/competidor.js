const db = [];
let nextId = 1;
const pais = require("./pais.js");
const tipoCompetidor = require("./tipoCompetidor.js")

const model = (body, id = nextId++) => {
  if (body.nome != undefined && 
    body.nome != "" &&
    body.licenca != undefined && 
    body.licenca != "" && 
    tipoCompetidor.show(body.idTipoCompetidor) &&
    pais.show(body.idPais)){
    
    return {
      id: id,
      nome: body.nome,
      licenca: body.licenca,
      idTipoCompetidor: body.idTipoCompetidor,
      idPais: body.idPais
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