const express = require("express")
const app = express();
const PORT = 3000 || process.env.PORT;
const path = require("path");
const exphbs = require("express-handlebars");

app.set("views",path.join(__dirname,"views"));
app.set('view engine', 'hbs');
app.engine('hbs',exphbs({
    defaultLayout: "main", 
    partialsDir:path.join(app.get("views"),"partials"),
    layoutDir: path.join(app.get("views"),"layouts"),
    extname: ".hbs",
    helpers:path.join(__dirname,"helpers")
    }));
 

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))

app.use("/",require("./server/server"));
app.listen(PORT,console.log(PORT))