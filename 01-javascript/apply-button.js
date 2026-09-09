
// Para hacer que los botones cambien lean el click y cambien acorde
const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection?.addEventListener('click', function(event) {
    const element = event.target

    if (element.classList.contains('button-apply-job')) {
        element.textContent = 'Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
})







// // Ahora a ver la barra input, de busqueda
// const searchInput = document.querySelector('#empleos-search-input')

// searchInput.addEventListener('input', function() {
//     console.log(searchInput.value)
// })

// const searchForm = document.querySelector('#empleos-search-form')

// searchForm.addEventListener('submit', function(event) {
//     event.preventDefault()
// })

// document.addEventListener('keydown', function(event) {
//     console.log("Tecla presionada: ", event.key)
//     console.log("tecla shift es:", event.shiftKey)
//     console.log("tecla ctrl es:", event.ctrlKey)
//     console.log("tecla alt es:", event.altKey)
// })



//const boton = document.querySelector('.button-apply-job')
//
//if (boton !== null) {
//    boton.addEventListener('click', function() {
//        boton.textContent = 'Aplicado!'
//        boton.classList.add('is-applied')
//        boton.disabled = true
//    })
//}


//const botones = document.querySelectorAll('.button-apply-job')
//
//botones.forEach(boton => {
//    boton.addEventListener('click', function() {
//        boton.textContent = 'Aplicado!'
//        boton.classList.add('is-applied')
//        boton.disabled = true
//    })
//})