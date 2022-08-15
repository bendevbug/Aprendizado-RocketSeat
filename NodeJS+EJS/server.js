const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        { 
          title: "D", 
          message: "Devs"
        },
        {
          title: "E",
          message: "EJS"
        },
        {
          title: "M",
          message: "Muito top"
        },
        {
          title: "A",
          message: "Árvore"
          },
        {
          title: "I",
          message: "Indígena"
        },
        {
          title: "S",
          message: "Sal"
        },
        
    ];
    res.render("pages/index", {
        qualities: items, 
    });
})

app.get("/about", function(req, res){
    res.render("pages/about");
})


app.listen(8080);
console.log('ok')