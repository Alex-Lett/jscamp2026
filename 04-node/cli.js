import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'
 
// 1. recuperar la carpeta a listar
const dir = process.argv[2] ?? '.'

//2. Formateo simple de tamanos
const formalBytes = (size) => {
    if (size < 1024) return `${size} B`
    return `${(size / 1024).toFixed(2)} KB`
}

// 3. Leer nombres sin info
const files = await readdir(dir)

// 4. Pedir toda la info de la carpeta o archivo que estoy listando
const entries = await Promise.all(
    files.map(async (name) => {
        const fullPath = join(dir, name)
        const info = await stat(fullPath)

        return {
            name,
            isDir: info.isDirectory(), 
            size: formalBytes(info.size)
        }
    })
)

// 5. Renderizar la informacion
for (const entry of entries) {
    const icon = entry.isDir ? '📁' : '📄'
    const size = entry.isDir ? '-' : `${entry.size}`
    console.log(`${icon}   ${entry.name.padEnd(20)}       ${size}`)
}