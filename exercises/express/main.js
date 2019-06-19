const express = require("express")
const app = express()
const data = require("./database")

app.use(express.json())

app.get("/destination", (request, response) => {
    response.send(data)
})
app.get("/destination/:id", (request, response) => {

})

app.post("/destination", (request, response) => {
    const newDestination = request.body
    data.push(newDestination)
    response.send(newDestination)
})
app.listen(1987, () => {
    console.log("server is running on port" + 1987)
})