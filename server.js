const express = require('express')

const app = express()


// middleware
app.use(express.static(`${__dirname}/public`))  //__dirname is the same as pwd (present working directory)

app.listen(4000, () => console.log('Running on port 4000'))