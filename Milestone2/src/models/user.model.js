import fs from 'fs';
const getUsers = () => {
    return fs.readFileSync(process.cwd()+'/src/mock-data/users.json','utf8');
}
const save = (usersData) => {
    var usersData = JSON.stringify(usersData);
    fs.writeFile(process.cwd()+'/src/mock-data/users.json', usersData, err => {
        if(err) throw err;
    });
}
export default {getUsers,save};