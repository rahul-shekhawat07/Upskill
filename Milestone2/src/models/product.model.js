import db from "../config/dbConnection";
const getProducts = () => {
    var query = `SELECT * FROM products`;
    return new Promise((resolve,reject) => {
        db.query(query, (err, value) => {
            if(err) reject(err);
            resolve(value);
        });
    });
}
export default {getProducts};