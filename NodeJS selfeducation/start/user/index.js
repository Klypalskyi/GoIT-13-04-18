let db = require("db");
let logger = require("logger")(module);

function User (name) {
    this.name = name
};

User.prototype.hello = function(who) {
    logger(db.getPhrase("Hello") + ', ' + who.name);
}

module.exports = User;