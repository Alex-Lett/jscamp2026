// ================================
// TIPOS PRIMITIVOS EN TYPESCRIPT
// ================================

// 1. strings
const nombre: string = "ale"
const saludo = `Hola, ${nombre}`
const vacio: string = ""

// 2. numeros
const color = 0x09f
let infinito = Infinity

// 3. booleanos
let isActive: boolean = true
isActive = false

// 4. nulos e indefinidos
let nulo: null = null
let indefinido: undefined = undefined

let age: number | null = null

const numeroGrande: bigint = 9007199245741991n
const id: symbol = Symbol("id")

// diferencia entre inferencia de datos para adivinar tipo, para let y const

const ciudad = "madrid"
let pais = "espana"
pais = "mexico" // valido