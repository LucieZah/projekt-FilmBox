const menu = document.querySelector("#menu-tlacitko")

const polozky = document.querySelector("#menu-polozky")
const zobrazeniMenu = document.querySelector (".fas.fa-bars")

menu.addEventListener ("click", event => {
    let jeZobrazeny = false
    if (!polozky.classList.contains('show')) {
    polozky.classList.add ("show")
    zobrazeniMenu.classList.remove (`fa-bars`)
    zobrazeniMenu.classList.add (`fa-xmark`)
    jeZobrazeny = true
    } else {
    polozky.classList.remove ("show")
    zobrazeniMenu.classList.add (`fa-bars`)
    zobrazeniMenu.classList.remove (`fa-xmark`)
    jeZobrazeny = false
}})


