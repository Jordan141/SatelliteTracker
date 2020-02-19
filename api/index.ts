import express from 'express'

const app = express()
const port = 8080

app.get('/', (_req, res) => {
    res.send('The angry hyena ate the antelope!')
})

app.listen(port, err => {
    if(err) {
        return console.error(err)
    }
    return console.log(`Server is listening on ${port}`)
})