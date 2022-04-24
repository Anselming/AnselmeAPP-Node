const handlebars = require("express-handlebars");


const UI = (app, express, userController, userService, REPOSITORY, MODEL) =>{

    var config = (app) =>{
        // handlebars
        app.engine('handlebars', handlebars.engine({
            layoutsDir:  './UI/views/layouts',
            defaultLayout: 'main'
            }));
        app.set('view engine', 'handlebars');
        app.set("views",  './UI/views/layouts');

        // encode/decode (via express)
        app.use(express.json())
        app.use(express.urlencoded({ extended: true}))
    };

    // Routes
    var configRoutes = ()=>{
        // Home
        app.get("/",(q,s)=>{
            s.render("home/index");});


            function ParseUser(user){
                var toReturn = []
                user.forEach((u)=>
                {
                    toReturn.push({
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
                    });
                });
                return toReturn };

        // Listar usuários
        app.get("/users-simplificado",(q,s)=>
        {
            userController.getUsersSimplificado(REPOSITORY, MODEL, userService)
            .then((u) => 
            {
                s.render("usuario/readSimplificado",
                {   
                    listExists:true, 
                    usuarios: ParseUser(u)
                });                                  
            })
            .catch(err => console.log(err));                
        });
                
        app.get("/users-completo",(q,s)=>
        {
            userController.getUsersCompleto(REPOSITORY, MODEL, userService)
            .then((u) => 
            {
                s.render("usuario/readCompleto",
                {   
                    listExists:true, 
                    usuarios: ParseUser(u)
                });                                  
            })
            .catch(err => console.log(err));                
        });  
                
    

        // Criar usuários
        app.get("/create-user-simplificado",(q,s)=>{
            s.render("usuario/createSimplificado");}); 

        // Criar usuários
        app.get("/create-user-completo",(q,s)=>{
            s.render("usuario/createCompleto");});  
            
        // Criar Usuario Simplificado
        app.post("/newuser-simplificado",(q,s)=>{
            s.render("usuario/criadoComSucesso");});
            
        app.post("/newuser-completo",(q,s)=>{
            s.render("usuario/criadoComErro");});      

    };

    // Apply
    config(app);
    configRoutes();
};

module.exports = UI;