import express from 'express'
import jobs from './jobs.json' with { type: 'json' }
import { DEFAULTS } from './config.js'

const PORT = process.env.PORT ?? DEFAULTS.PORT
const app = express()

app.use((req, res, next) => {
    const timeString = new Date().toLocaleTimeString()
    console.log(`[${timeString}] ${req.method} ${req.url}`)
    next()
})

app.get('/', (req, res) => {
    return res.send('Hola mierdaaaaas!')
})

app.get('/health', (req, res) => {
    return res.json({
        status: 'ok',
        uptime: process.uptime()
    })
})

// CRUD: Create, Read, Update, Delete

app.get('/jobs', (req, res) => {
    const { text, title, level, limit = DEFAULTS.LIMIT_PAGINATION, technology, offset = DEFAULTS.LIMIT_OFFSET } = req.query

    let filteredJobs = jobs

    if(text) {
        const searchTerm = text.toLowerCase()
        filteredJobs = filteredJobs.filter(job =>
            job.titulo.toLowerCase().includes(searchTerm) || job.descripcion.toLowerCase().includes(searchTerm)
        )
    }

    if (technology) {
        filteredJobs = filteredJobs.filter(job =>
            job.tecnologias.includes(technology)
        )
    }

    const limitNumber = Number(limit)
    const offsetNumber = Number(offset)

    const paginatedJobs = filteredJobs.slice(offsetNumber, offsetNumber + limitNumber)

    return res.json(paginatedJobs)
})

app.get('/jobs/:id', (req, res) => {
    const { id } = req.params

    const idNumber = Number(id)

    return res.json({
        job: { id: idNumber, title: `Job with id ${id}`}
    })
})

app.post('/jobs', (req, res) => {
    //TODO
})

// Para reemplazar un recurso completo
app.put('/jobs/:id', (req, res) => {
    //TODO
})

// Actualizar parcialmente un recurso
app.patch('/jobs/:id', (req, res) => {
    //TODO
})

app.delete('/jobs/:id', (req, res) => {
    // TODO
})


app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`)
})