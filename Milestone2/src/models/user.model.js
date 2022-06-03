const fs = require('fs');
const getUsers = () => {
    return fs.readFileSync(process.env.PWD+'/src/mock-data/users.json','utf8');
}
const save = (userData) => {
    return fs.appendFileSync(process.env.PWD+'/src/mock-data/users.json', userData);
}
module.exports = {getUsers,save};