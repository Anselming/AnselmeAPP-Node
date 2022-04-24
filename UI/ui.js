const handlebars = require("express-handlebars");

const UI = (app, express) =>{

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

        // Listar usuários
        app.get("/users-simplificado",(q,s)=>{
            s.render("usuario/readSimplificado");});      

        // Listar usuários
        app.get("/users-completo",(q,s)=>{
            s.render("usuario/readCompleto");});       

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