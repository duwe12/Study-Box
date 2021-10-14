const { Turma, User } = require("../db/models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");


  //Rotas de aula

//rota para ciar aula
async function createTurma(req, res, next) {
    const { nome } = req.body
    const file = req.file

    try {
        const [turma, created] = await Turma.findOrCreate({
            where: { nome: nome },
            defaults: {  }
        });

        if (!created) {
            if (file) {
                fs.unlinkSync(path.resolve(__dirname, "..", "uploads", file.filename));
            }

            throw new createHttpError(409, "Turma já existe");
        }

        return res.status(201).json(turma)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar todas as aula
async function getAllTurma(req, res, next) {
    try {

        const turma = await Turma.findAll();

        return res.status(200).json(turma)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar uma aula por id
async function getTurmaById(req, res, next) {
    const turmaId = req.params.id

    try {

        const turma = await Turma.findOne({ where: { id: turmaId } })

        if (!turma) {
            throw new createHttpError(404, "turma não encontrada");
        }

        return res.status(200).json(turma)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para aditar aula
async function editTurma(req, res, next) {
    const turmaId = req.params.id;
    const { nome } = req.body

    try {

        const turma = await Turma.findOne({ where: { id: turmaId } })

        if (!turma) {
            throw new createHttpError(404, "Turma não encontrada");
        }

        Object.assign(turma, { nome })

        await turma.save()

        return res.status(200).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para deletar uma aula
async function deleteTurma(req, res, next) {
    const turmaId = req.params.id
    try {

        const turma = await Turma.findOne({ where: { id: turmaId } })

        if (!turma) {
            throw new createHttpError(404, "Turma não encontrada");
        }

        await turma.destroy()

        return res.status(204).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function getTurmas(req, res, next) {
    const userId = res.locals.userId;
    try {

        const user = await User.findOne({ where: { id: userId }});

        res.json(await user.getTurmas());
    } catch (error) {
        console.log(error)
        next(error)
    }
}


module.exports = {
    createTurma,
    getAllTurma,
    getTurmaById,
    editTurma,
    deleteTurma,
    getTurmas
}
//