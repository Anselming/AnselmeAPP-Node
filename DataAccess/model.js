
exports.getUsuario = (Sequelize, connection) => connection.define("usuarios",{
    nome: { type: Sequelize.STRING},
    sobrenome: { type: Sequelize.STRING},
    dataNascimento: { type: Sequelize.DATE},
    filhos: { type: Sequelize.INTEGER},
    chapa: { type: Sequelize.INTEGER},
    email: { type: Sequelize.STRING},
    telefone: { type: Sequelize.STRING},
    endereco: { type: Sequelize.STRING},
    website: { type: Sequelize.STRING},
    github: { type: Sequelize.STRING},
    linkedin: { type: Sequelize.STRING},
    facebook: { type: Sequelize.STRING},
    instagram: { type: Sequelize.STRING},
    twitter: { type: Sequelize.STRING}
});