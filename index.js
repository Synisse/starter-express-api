const express = require('express')
const path = require('path')

const app = express()
// app.all('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// })
app.use(express.static('public'));
app.listen(process.env.PORT || 3000)