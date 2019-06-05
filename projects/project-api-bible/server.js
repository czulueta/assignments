const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())

app.post('/forwarder', (req, res) => {
    axios.get(req.query.url, req.body).then((response)=> {
        res.send(response.data)
    })
})

app.listen(5000, () => {
    console.log('port running on ' + 5000)
})