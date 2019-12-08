const fs = require('fs');
const util = require('util');
fs.readFile = util.promisify(fs.readFile);

const usersData = require('../../data/users.json');

class UserDAO {
  async get(userName) {
    return usersData.find((user) => user.userName === userName);
  }
}

module.exports = UserDAO;
