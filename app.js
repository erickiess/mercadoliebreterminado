const express = require("express");
const { dirname } = require("path");
const path = require ("path");

const app = express ();

const port = process.env.PORT || 3000;


app.listen(port,()=> (
    console.log("Servidor escuchando en el puerto " + port  )
));
app.use(express.static("public"));
    
app.get ("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));

});