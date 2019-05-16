const db = require("../dbConfig.js");


module.exports = {
  insert
};

function insert(guest) {
  return db("projects")
    .insert(guest)
    .then(([id]) => this.get(id));
}
