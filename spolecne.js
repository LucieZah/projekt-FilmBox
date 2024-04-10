const menu = document.querySelector("#menu-tlacitko")

const polozky = document.querySelector("#menu-polozky")

menu.addEventListener ("click", event => {
    let jeZobrazeny = false
    if (!polozky.classList.contains('show')) {
    polozky.classList.add ("show")
    jeZobrazeny = true
    } else {
    polozky.classList.remove ("show")
    jeZobrazeny = false
}})

