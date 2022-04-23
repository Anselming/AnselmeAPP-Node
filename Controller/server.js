var SERVER = (app) =>{

    var Run = (app) =>{
        // Running Server
        app.listen(8080,()=> console.log("Running HTTP on 8080"));
    };
    
    Run(app);
};

module.exports = SERVER;