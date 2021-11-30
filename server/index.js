const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const ctrl = require('./controller.js')

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.createHouses)
app.put('/api/houses/:id', ctrl.updateHouses)
app.delete('/api/houses/:id', ctrl.deleteHouses)

app.listen(4004, () => console.log('running server on 4004'))