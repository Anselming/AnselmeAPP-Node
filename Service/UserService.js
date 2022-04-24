
const SEQUELIZE = require("sequelize");
//const REPOSITORY = require("./DataAccess/repository.js");
//const connection = REPOSITORY.Connect(SEQUELIZE);

//const MODEL = require("./DataAccess/model.js");
//const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

exports.CreateBasicNewUserService = (nome, sobrenome) => {
    REPOSITORY.Create(usuarioModel,{
        nome: nome,
        sobrenome: sobrenome,
    });
}

exports.CreateCompleteNewUserService = (REPOSITORY, MODEL, nome, sobrenome, dataNascimento, filhos, chapa, email, telefone, endereco, website, github, linkedin, facebook, instagram, twitter) => {
    
    const connection = REPOSITORY.Connect(SEQUELIZE);
    const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

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

exports.GetUserById = (REPOSITORY, MODEL, id) => {
    const connection = REPOSITORY.Connect(SEQUELIZE);
    const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

    return REPOSITORY.FindById(usuarioModel, id);
}

function ParseUser(u){
    return {
        nome: u.nome,
        sobrenome: u.sobrenome,
        dataNascimento: u.dataNascimento,
        filhos: u.filhos,
        chapa: u.chapa,
        email: u.email,
        telefone: u.telefone,
        endereco: u.endereco,
        website: u.website,
        github: u.github,
        linkedin: u.linkedin,
        facebook: u.facebook,
        instagram: u.instagram,
        twitter: u.twitter
    }};

exports.GetAllUsers = (REPOSITORY, MODEL, ) => {
    const connection = REPOSITORY.Connect(SEQUELIZE);
    const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

    return REPOSITORY.FindAll(usuarioModel);
    // var allItems = REPOSITORY.FindAll(usuarioModel);
    // var parsed = [];
    // allItems.then((r) => {
    //     parsed.push(ParseUser(r[0]));
    //     return parsed;
    // });

    // console.log(parsed);
}

exports.GetUserByName = (REPOSITORY, MODEL, name) => {
    const connection = REPOSITORY.Connect(SEQUELIZE);
    const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

    return REPOSITORY.FindByParameters(usuarioModel, {"where" : {name : name}})
}

exports.GetUserByEmail = (REPOSITORY, MODEL, email) => {
    const connection = REPOSITORY.Connect(SEQUELIZE);
    const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

    return REPOSITORY.FindByParameters(usuarioModel, {"where" : {email : email}})
}

exports.Get18yearsPlus = (REPOSITORY, MODEL ) => {
    const connection = REPOSITORY.Connect(SEQUELIZE);
    const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

    return REPOSITORY.FindByParameters(usuarioModel, { 
        where: {
            dataNascimento: { $gte: moment().subtract(18, 'years').toDate() }
      }})
}

exports.UpdateUser = (REPOSITORY, MODEL, id, data) => {
    const connection = REPOSITORY.Connect(SEQUELIZE);
    const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

    return REPOSITORY.UpdateById(usuarioModel,data, id);
}

exports.RemoveUser = (REPOSITORY, MODEL, id) => {
    const connection = REPOSITORY.Connect(SEQUELIZE);
    const usuarioModel = MODEL.getUsuario(SEQUELIZE, connection);

    return REPOSITORY.DeleteById(usuarioModel, id);
}
