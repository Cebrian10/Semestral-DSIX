import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.port ?? 3000

app.use(cors()) //Enable CORS

app.get('/api/numbers', async (req, res) => {
    return res.status(200).json({ data: [], message: 'El archivo se retorno correctamente' })
})

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
