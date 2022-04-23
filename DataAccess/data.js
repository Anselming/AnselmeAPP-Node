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

exports.Create = (model) =>{
    //model.sync({forte: true});
};

exports.ReadOne = (model) =>{
    //model.sync({forte: true});
};

exports.ReadAll = (model) =>{
    //model.sync({forte: true});
};

exports.Update = (model) =>{
    //model.sync({forte: true});
};

exports.Delete = (model) =>{
    //model.sync({forte: true});
};

