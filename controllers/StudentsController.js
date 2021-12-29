// import model student
const Student = require('../models/Students');

class StudentController {
    async index(req, res) {
        const student = await Student.all();

        const data = {
            message: "Menampilkan data student",
            data: student
        }

        res.status(200).json(data);
    }
    //async store
    async store(req, res) {
        const student = await Student.create(req.body);
        const data = {
            message: `Menambahkan data student`,
            data: student
        }
        res.status(201).json(data);
    }
    // update
    update(req, res) {
        const {
            id
        } = req.params
        const {
            nama
        } = req.body;

        const data = {
            message: `Mengedit data student ${id} namanya ${nama}`,
            data: []
        }
        res.json(data);
    }
    // destroy
    destroy(req, res) {
        const {
            id
        } = req.params

        const data = {
            message: `Mengapus student ${id}`,
            data: []
        }
        res.json(data);
    }
}

// buat object
const object = new StudentController();

module.exports = object;