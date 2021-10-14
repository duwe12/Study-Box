const { Aula } = require("../db/models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");


  //Rotas de aula

//rota para ciar aula
async function createAula(req, res, next) {
    const { titulo, descrição, data, materia_id } = req.body
    const file = req.file

    try {
        const [aula, created] = await Aula.findOrCreate({
            where: { titulo: titulo },
            defaults: { descrição, data, materia_id }
        });

        if (!created) {
            if (file) {
                fs.unlinkSync(path.resolve(__dirname, "..", "uploads", file.filename));
            }

            throw new createHttpError(409, "Aula já existe");
        }

        return res.status(201).json(aula)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar todas as aula
async function getAllAula(req, res, next) {
    try {

        const aulas = await Aula.findAll();

        return res.status(200).json(aulas)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar uma aula por id
async function getAulaById(req, res, next) {
    const aulaId = req.params.id

    try {

        const aula = await Aula.findOne({ where: { id: aulaId } })

        if (!aula) {
            throw new createHttpError(404, "Aula não encontrada");
        }

        return res.status(200).json(aula)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para aditar uma aula
async function editAula(req, res, next) {
    const aulaId = req.params.id;
    const { titulo, descricao, data } = req.body

    try {

        const aula = await Aula.findOne({ where: { id: aulaId } })

        if (!aula) {
            throw new createHttpError(404, "Aula não encontrada");
        }

        Object.assign(aula, { titulo, descricao, data })

        await aula.save()

        return res.status(200).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para deletar uma aula
async function deleteAula(req, res, next) {
    const aulaId = req.params.id
    try {

        const aula = await Aula.findOne({ where: { id: aulaId } })

        if (!aula) {
            throw new createHttpError(404, "Aula não encontrada");
        }

        await aula.destroy()

        return res.status(204).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}


module.exports = {
    createAula,
    getAllAula,
    getAulaById,
    editAula,
    deleteAula
}