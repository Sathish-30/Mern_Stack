import mysql from "mysql2";

const conn = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"helloworld",
        port:3306,
        database:"test",
})

export default conn;