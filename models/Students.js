// import db
const db = require('../config/database');

class Student {
    static all() {
        const promise = new Promise((resolve, reject) => {
            // melakukan query
            const sql = "SELECT * FROM students";
            db.query(sql, (error, results) => {
                resolve(results);
            });
        });

        return promise;
    }
    // membuat tampilan
    static show(id) {
        const promise = new Promise((resolve, reject) => {
            // melakukan query
            const sql = `SELECT * FROM students WHERE id = ${id}`;
            db.query(sql, (error, results) => {
                resolve(results);
            });
        });

        return promise;
    }
    // menambahkan data
    static create(data) {
        return new Promise((resolve, reject) => {
            // melakukan insert data
            const sql = `INSERT INTO students SET ?`;
            db.query(sql, data, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.show(results.insertId));
                }
            });
        });
    }
}

// expor model
module.exports = Student;