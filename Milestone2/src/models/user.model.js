const fs = require('fs');
const getUsers = () => {
    return fs.readFileSync(process.cwd()+'/src/mock-data/users.json','utf8');
}
const save = (usersData) => {
    var usersData = JSON.stringify(usersData);
    fs.writeFile(process.cwd()+'/src/mock-data/users.json', usersData, err => {
        if(err) throw err;
    });
}
module.exports = {getUsers,save};