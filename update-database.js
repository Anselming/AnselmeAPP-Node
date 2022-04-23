// -----------------------------------------------------
// General Configuration
// -----------------------------------------------------
const SEQUELIZE = require("sequelize");
const REPOSITORY = require("./DataAccess/repository.js");
const connection = REPOSITORY.Connect(SEQUELIZE);

const MODEL = require("./DataAccess/model.js");
const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);


// Update database columns
//REPOSITORY.SyncModelOnDatabase(usuarioModel);


// Seed
REPOSITORY.Create(usuarioModel,{
    nome: "Thiago",
    sobrenome: "Anselme",
    dataNascimento: "05/06/1988",
    filhos:1,
    chapa: 12345,
    email: "thiago.anselme@gmail.com",
    telefone: "(21) 9-8582-3835",
    endereco: "Rua xpto",
    website: "www.",
    github: "git",
    linkedin: "inin",
    facebook: "face",
    instagram: "insta",
    twitter: "piu",
});

REPOSITORY.Create(usuarioModel,{
    nome: "Antígona",
    sobrenome: "Anselme",
    dataNascimento: "05/06/1988",
    filhos:1,
    chapa: 12345,
    email: "thiago.anselme@gmail.com",
    telefone: "(21) 9-8582-3835",
    endereco: "Rua xpto",
    website: "www.",
    github: "git",
    linkedin: "inin",
    facebook: "face",
    instagram: "insta",
    twitter: "piu",
});