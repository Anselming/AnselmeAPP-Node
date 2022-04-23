// -----------------------------------------------------
// General Configuration
// -----------------------------------------------------
const UI = require("./UI/ui.js");
//const SERVER = require("./Controller/server.js");

const SEQUELIZE = require("sequelize");
const DATA = require("./DataAccess/data.js");
const connection = DATA.Connect(SEQUELIZE);

const MODEL = require("./DataAccess/model.js");
const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

const express = require("express");
const e = require("express");

const app = express();
const ui = UI(app,express);

/*********************************************************/
console.log("*******************************************");

// var u = null;

// DATA.UpdateById(usuarioModel,{nome: "XXX"}, 7);


    //console.log(u);
//u.nome = "ThigoAÃÃO!";

//console.log(usuarios);

//DATA.UpdateById(usuarioModel,u);

//usuarios;

//DATA.Create(usuario,{nome: "Thiago"});
// usuario.create({nome: "Thiago"});


// DATA.Create(usuario,{
//     nome: "Thiago",
//     sobrenome: "Anselme",
//     dataNascimento: "05/06/1988",
//     filhos:1,
//     chapa: 12345,
//     email: "thiago.anselme@gmail.com",
//     telefone: "(21) 9-8582-3835",
//     endereco: "Rua xpto",
//     website: "www.",
//     github: "git",
//     linkedin: "inin",
//     facebook: "face",
//     instagram: "insta",
//     twitter: "piu",
// });


//DATA.SyncModelOnDatabase(usuario);
//console.log("criado");




// Próximos passos
// - CRUD de models
// - Crid com os predicates

// Próximos passos
// - Criar Controllers que expoe métodos relevantes de acesso aos dados
// - Parse da Model em ViewModel
// - Exibição para o FrontEnd das Controllers através de API's
// - Construção do FrontEnd

// Próximos passos
// - Voltar a estudar o curso
// - Adicionar Login
// - Utilizar Template de layout de mercado
// - Fazer a aplicação funcionar fim-a-fim



// Run Server
//SERVER(app);
    
    