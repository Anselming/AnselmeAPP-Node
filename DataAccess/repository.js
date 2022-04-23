exports.Connect = (Sequelize) =>{
    const connection = new Sequelize("Teste","root","123456",{
        host: "localhost",
        dialect: "mysql"
    });

    return connection;
};

exports.SyncModelOnDatabase = (model) =>{
    model.sync({force: true});
};

exports.Create = (model, data) =>{
    model.create(data);    
};

exports.FindById = (model, id) =>{
    return model.findAll( {"where" : {id : id}});
};

exports.FindByParameters = (model, parameters) =>{
    return model.findAll(parameters);
};

exports.FindAll = (model) =>{
    return model.findAll();
};

exports.UpdateById = (model,data, id) =>{
    model.update(data, { where: { id: id }});
};

exports.UpdateByParameters = (model,data,parameters) =>{
    model.update(data, parameters);
};

exports.DeleteById = (model, id) =>{
    model.destroy({ where: { id: id }});
};

exports.DeleteByParameters = (model, parameters) =>{
    model.destroy(parameters);
};

