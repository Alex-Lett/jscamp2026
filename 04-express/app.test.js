import { test, describe, before, after } from 'node:test'
import assert from 'node:assert'
import { app } from './app.js'

let server
const PORT = 3456
const BASE_URL = `http://localhost:${PORT}`

// Antes de los test, se ejecuta:
before(async () => {
    return new Promise((resolve, reject) => {
        server = app.listen(PORT, () => resolve())
        server.on('error', reject)
    })
})

// Despues de los test, se ejecuta: para cerrar el servidor
after(async ()=> {
    return new Promise((resolve, reject) => {
        server.close((err) => {
            if (err) return reject(err)
            resolve()
        })
    })
})

describe('GET /jobs', () => {
  test('debe responder con 200 y un array de trabajos', async () => {
    const response = await fetch(`${BASE_URL}/jobs`)
    assert.strictEqual(response.status, 200)

    const json = await response.json()
    assert.ok(Array.isArray(json.data), 'La respuesta debe ser un array')
  })
})