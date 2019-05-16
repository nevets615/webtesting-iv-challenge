const db = require("../dbConfig.js");


module.exports = {
    get,
  insert,
};

function get(id) {
    let query = db('projects as p');
  
    if (id) {
      query.where('p.id', id).first();
  
      const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]
  
      return Promise.all(promises).then(function(results) {
        let [project, actions] = results;
  
        if (project) {
          project.actions = actions;
  
          return mappers.projectToBody(project);
        } else {
          return null;
        }
      });
    }
  
    return query.then(projects => {
      return projects.map(project => mappers.projectToBody(project));
    });
  }

function insert(guest) {
  return db("projects")
    .insert(guest)
    .then(([id]) => this.get(id));
}
