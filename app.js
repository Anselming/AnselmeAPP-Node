// -----------------------------------------------------
// General Configuration
// -----------------------------------------------------
const UI = require("./UI/ui.js");
const SERVER = require("./Controller/server.js");

const SEQUELIZE = require("sequelize");
const REPOSITORY = require("./DataAccess/repository.js");
const connection = REPOSITORY.Connect(SEQUELIZE);

const MODEL = require("./DataAccess/model.js");
const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

const express = require("express");
const e = require("express");

const app = express();
const ui = UI(app,express);







// Próximos passos
// - Criar completamente a camada de serviços
// - Criar Controllers que expoe métodos relevantes de acesso aos dados (usando algumas coisas de serviço)
// - Parse da Model em ViewModel
// - Exibição para o FrontEnd das Controllers através de API's
// - Construção do FrontEnd

// Próximos passos
// - Voltar a estudar o curso
// - Adicionar Login
// - Utilizar Template de layout de mercado
// - Fazer a aplicação funcionar fim-a-fim



// Run Server
SERVER(app);
    
    