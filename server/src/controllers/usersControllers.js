const { User } = require("../db/models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");


  //Rotas de usuário

// rota para criar um usuário
async function createUser(req, res, next) {
    const { name, email, password, permissao } = req.body;
    const file = req.file;

    let avatar;
    if (file) {
        avatar = `${process.env.APP_URL}/images/${file.filename}`
    }

    try {
        const [user, created] = await User.findOrCreate({
            where: { email: email.toLowerCase() },
            defaults: { name, password, permissao }
        });

        if (!created) {
            if (file) {
                fs.unlinkSync(path.resolve(__dirname, "..", "..", "uploads", file.filename));
            }

            throw new createHttpError(409, "E-mail já cadastrado");
        }

        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

// rota para pegar todos os usuarios
async function getAllUser(req, res, next) {
    try {

        const user = await User.findAll()

        return res.status(200).json(user)

    } catch (error) {
        console.log(error);
        next(error)
    }
}

// rota para pagar um usuário pelo id
async function getUser(req, res, next) {
    try {
        const userId = res.locals.userId;

        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        return res.json(user)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

// rota para atualizar um usuário
async function updateUser(req, res, next) {
    try {
        const userEmail = req.params.email
        const { name, password } = req.body

        const userFound = await User.findOne({ where: { email: userEmail } })

        if (!userFound) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        Object.assign(userFound, { name, password })

        await userFound.save();

        res.status(200).end()

    } catch (error) {
        console.log(error)
        next(error)
    }
}

// rota para deletar um usuário
async function deleteUser(req, res, next) {

    try {
        const userEmail = req.params.email;

        const userFound = await User.findOne({ where: { email: userEmail } });

        if (!userFound) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        await userFound.destroy();

        res.status(204).end();
    } catch (error) {
        console.log(error)
        next(error)
    }

}


module.exports = {
    createUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser
}