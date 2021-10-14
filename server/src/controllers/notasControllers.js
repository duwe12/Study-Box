const { Notas, Provas, Alunos } = require("../db/models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");


  //Rotas de notas

//rota para ciar nota
async function createNotas(req, res, next) {
    const { alunoId, valor, idProva } = req.body

    try {

        const provaId = Provas.findOne({where: {id: idProva}})

        const [nota, created] = await Notas.findOrCreate({
            where: { id_aluno: alunoId } && { id_prova: provaId },
            defaults: { valor, provaId, alunoId }
        });

        if (!created) {
            throw new createHttpError(409, "Nota já criada");
        }

        return res.status(201).json(nota)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar todas as nota
async function getAllNotas(req, res, next) {
    try {

        const notas = await Notas.findAll();

        return res.status(200).json(notas)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar uma nota por id
async function getNotasById(req, res, next) {
    const id = req.params.id

    try {

        const nota = await Notas.findOne({ where: { aluno_id: id } || { prova_id : id} })

        if (!nota) {
            throw new createHttpError(404, "Nota não encontrada");
        }

        return res.status(200).json(nota)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para editar nota
async function editNotas(req, res, next) {
    const { valor, provaId, alunoId } = req.body

    try {

        const nota = await Notas.findOne({ where: { prova_id: provaId } && { aluno_id: alunoId } })

        if (!nota) {
            throw new createHttpError(404, "Nota não encontrada");
        }

        Object.assign(nota, { valor })

        await nota.save()

        return res.status(200).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para deletar uma nota
async function deleteNotas(req, res, next) {
    const { alunoId, provaId } = req.body

    try {

        const nota = await Notas.findOne({ where: { aluno_id: alunoId } && { prova_id: provaId } })

        if (!nota) {
            throw new createHttpError(404, "Nota não encontrada");
        }

        await nota.destroy()

        return res.status(204).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}


module.exports = {
    createNotas,
    getAllNotas,
    getNotasById,
    editNotas,
    deleteNotas
}