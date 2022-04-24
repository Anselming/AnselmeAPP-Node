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

const userController = require("./Controller/userController.js")
const userService = require("./Service/UserService.js")

const app = express();
const ui = UI(app,express,userController,userService, REPOSITORY, MODEL);







// Próximos passos
// - Tela de Listar usuários (READ)
//          - Simplificada: exibir todos os usuários (Mock)                     -- OK
//          - Completa: exibir todos os usuários (Mock)                         -- OK
//          - Criar botão de deletar (Apontar para rota de deleção)             -- pending
//          - Criar botão de atualizar (Apontar para a rota de atualização)     -- pending
//          - Simplificada: exibir todos os usuários (sem mock)                 -- OK
//          - Completa: exibir todos os usuários (sem mock)                     -- OK

// - Tela de Criação (CREATE)        
//          - Suportar criação simplificada
//          - Suportar criação completa

// - Tela de Atualizar usuários (UPDATE)
//          - Suportar atualização simplificada
//          - Suportar atualização completa

// - Tela de deleção
//          - Confirmar deleção.
//          - Deletar com sucesso
            
// - Criar Controllers que expoe métodos relevantes de acesso aos dados (usando algumas coisas de serviço)
// - Parse da Model em ViewModel
// - Exibição para o FrontEnd das Controllers através de API's


// Próximos passos
// - Voltar a estudar o curso
// - Adicionar Login
// - Utilizar Template de layout de mercado
// - Fazer a aplicação funcionar fim-a-fim



// Run Server
SERVER(app);
    
    