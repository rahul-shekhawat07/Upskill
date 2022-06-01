const fs = require('fs');
const getUsers = () => {
    return fs.readFileSync(process.cwd()+'/src/mock-data/users.json','utf8');
}
module.exports = {getUsers};