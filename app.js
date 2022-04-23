// -----------------------------------------------------
// General Configuration
const UI = require("./UI/ui.js");
const SERVER = require("./Controller/server.js");

const SEQUELIZE = require("sequelize");
const DATA = require("./DataAccess/data.js");
const connection = DATA.Connect(SEQUELIZE);

const MODEL = require("./DataAccess/model.js");
const usuario = MODEL.getUsuario(SEQUELIZE, connection);

const express = require("express");

const app = express();
const ui = UI(app,express);

DATA.SyncModelOnDatabase(usuario);







// Próximos passos
// - CRUD de models
// - Crid com os predicates

// Próximos passos
// - Criar Controllers que expoe métodos relevantes de acesso aos dados
// - Parse da Model em ViewModel
// - Exibição para o FrontEnd das Controllers através de API's
// - Construção do FrontEnd
// - Fazer a aplicação funcionar fim-a-fim



// Run Server
SERVER(app);
    
    