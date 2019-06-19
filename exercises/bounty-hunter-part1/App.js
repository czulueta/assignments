const express = require("express")
const App = express()
const uuid = require('uuid/v4')
const Data = require("./Data")

App.use(express.json())

App.get("/hunted", (request, response) => {
    response.send(Data)
})

App.get("/hunted/:_id",  (request, response) => {
    console.log(request.params._id)
    const results = Data.filter(destination => destination._id === request.params._id)
    response.send(results)
})

App.post("/hunted", (request, response) => {
    const newHunted = request.body
    newHunted._id = uuid()
    Data.push(newHunted)
    response.send(newHunted)
})

App.delete("/hunted/:_id", (request, response) => {
    data.forEach((hunted,i) => {
        if(request.params._id === hunted._id){
            Data.splice(i, 1)
        }
    })
    response.send({
        msg: " successfully deleted destination"
    })
})

App.put("hunted:_id", (request, response) => {
    const updatedHunted = request.body;
    Data.forEach(hunted => {
        if(request.params.hunted === hunted._id){
            return Object.assign(hunted, newHunted)
        }
    })
    response.send({
        msg: "successfully updated destination",
        Data
    })
})

App.listen(3005, () =>{
    console.log("server is running on port" + 3005)
})