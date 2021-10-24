
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    let currentDateTime = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo'
    })

    res.send(currentDateTime)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
