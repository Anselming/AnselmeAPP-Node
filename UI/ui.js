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

    // Create User
    app.get("/user-create",(q,s)=>{
        s.render("usuario/create");});

    // Read User
    app.get("/user-read",(q,s)=>{
        s.render("usuario/read");});
        
    // Update User
    app.get("/user-update",(q,s)=>{
        s.render("usuario/update");});
        
    // Delete User
    app.get("/user-delete",(q,s)=>{
        s.render("usuario/delete");});        

    };

    // Apply
    config(app);
    configRoutes();
};

module.exports = UI;