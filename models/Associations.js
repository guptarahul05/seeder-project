const User = require('./User');
const Session = require('./Session');

function createAssociations(options = {}) {
  Session.belongsTo(User);
  User.hasMany(Session);
}
module.exports = createAssociations;
