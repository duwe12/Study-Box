require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const PORT = process.env.PORT || 3001;

const app = express();

const db = require("./db/models");

// Definindo os middlewares de request
app.use(cors());
app.use(express.json());
app.use("/api/images", express.static("uploads"));
app.use(morgan("dev"));

// Definindo as rotas
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/class", require("./routes/classRoutes"));
app.use("/api/nota", require("./routes/notaRoutes"));
app.use("/api/materia", require("./routes/materiaRoutes"));
app.use("/api/turmas", require("./routes/turmasRoutes"));
app.use("/api/prova", require("./routes/provaRoutes"));

// Definindo o middleware de tratamento de erros
app.use(require("./middlewares/errorMiddleware"));

// Definindo a rota da documentação
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log("Server running in: " + PORT));

