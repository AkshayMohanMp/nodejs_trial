// Importing Express
const express = require("express");


// intialisation 
const app = express();


// Application will gone use only json format data
app.use(express.json());

//  port No
const port =8081


// Array
const toDoList =["Akshay","ashak","aaaa","aiswarya"];


// api

app.get("/todos",(req,res) =>{
    // response status
    res.status(200).send(toDoList);
})

app.post("/todos",(req,res) =>{
    let newTodo =req.body.item;
    toDoList.push(newTodo);
    res.status(201).send({
        message : "Data added:"
    })
})

app.delete("/todos",(req,res) =>{
    const itemToDelete =req.body.item;



    toDoList.find((elem, i) => {
        if(elem == itemToDelete){
            toDoList.splice(i,1);
        }
       
    })
    res.status(204).send({
        message: "Deleted Succesfull"
    })


})

app.all("/todos",(req,res) =>{
    res.status(501).send();
})

app.all("*",(req,res) =>{
    res.status(404).send();
})

app.listen(port, () => {
    console.log("express server application is succesfully running on the port", port);
}) 