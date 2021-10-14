const { Provas } = require("../db/models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");


  //Rotas de aula

//rota para ciar matéria
async function createProva(req, res, next) {
    const { titulo, descricao, materia_id } = req.body

    try {
        const [prova, created] = await Provas.findOrCreate({
            where: { titulo: titulo },
            defaults: { descricao, materia_id }
        });

        if (!created) {
            throw new createHttpError(409, "Prova já criada");
        }

        return res.status(201).json(prova)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar todas as matérias
async function getAllProva(req, res, next) {
    try {

        const prova = await Provas.findAll();

        return res.status(200).json(prova)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para pegar uma matéria por id
async function getProvaById(req, res, next) {
    const provaId = req.params.id

    try {

        const prova = await Provas.findOne({ where: { id: provaId } })

        if (!prova) {
            throw new createHttpError(404, "Prova não encontrada");
        }

        return res.status(200).json(prova)

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para aditar uma matéria
async function editProva(req, res, next) {
    const provaId = req.params.id;
    const { titulo, descricao } = req.body

    try {

        const prova = await Provas.findOne({ where: { id: provaId } })

        if (!prova) {
            throw new createHttpError(404, "Prova não encontrada");
        }

        Object.assign(prova, { titulo, descricao })

        await prova.save()

        return res.status(200).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}

//rota para deletar uma matéria
async function deleteProva(req, res, next) {
    const provaId = req.params.id
    try {

        const prova = await Provas.findOne({ where: { id: provaId } })

        if (!prova) {
            throw new createHttpError(404, "Prova não encontrada");
        }

        await prova.destroy()

        return res.status(204).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}


module.exports = {
    createProva,
    getAllProva,
    getProvaById,
    editProva,
    deleteProva
}