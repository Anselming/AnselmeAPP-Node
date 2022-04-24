
const SEQUELIZE = require("sequelize");
const REPOSITORY = require("./DataAccess/repository.js");
const connection = REPOSITORY.Connect(SEQUELIZE);

const MODEL = require("./DataAccess/model.js");
const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

exports.CreateBasicNewUserService = (nome, sobrenome) => {
    REPOSITORY.Create(usuarioModel,{
        nome: nome,
        sobrenome: sobrenome,
    });
}

exports.CreateCompleteNewUserService = (nome, sobrenome, dataNascimento, filhos, chapa, email, telefone, endereco, website, github, linkedin, facebook, instagram, twitter) => {
    REPOSITORY.Create(usuarioModel,{
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
        filhos:filhos,
        chapa: chapa,
        email: email,
        telefone: telefone,
        endereco: endereco,
        website: website,
        github: github,
        linkedin: linkedin,
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
    });
}

exports.GetUserById = (id) => {
    return REPOSITORY.FindById(usuarioModel, id);
}

exports.GetUserByName = (name) => {
    return REPOSITORY.FindByParameters(usuarioModel, {"where" : {name : name}})
}

exports.GetUserByEmail = (email) => {
    return REPOSITORY.FindByParameters(usuarioModel, {"where" : {email : email}})
}

exports.Get18yearsPlus = () => {
    return REPOSITORY.FindByParameters(usuarioModel, { 
        where: {
            dataNascimento: { $gte: moment().subtract(18, 'years').toDate() }
      }})
}

exports.UpdateUser = (id, data) => {
    return REPOSITORY.UpdateById(usuarioModel,data, id);
}

exports.RemoveUser = (id) => {
    return REPOSITORY.DeleteById(usuarioModel, id);
}
