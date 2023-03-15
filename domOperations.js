function showResultInDomKvadrat(){
    const dlinaStoroniKvadrata = document.getElementById(`dlinaStoroniKvadrata`).value
    const ploschadKvadrata = document.getElementById(`ploschadKvadrata`)
    ploschadKvadrata.innerHTML = findSquareArea(dlinaStoroniKvadrata)
}

function showResultInDomPriamougolnika(){
    const pervayaStoronaPriamougolnika = document.getElementById(`pervayaStoronaPriamougolnika`).value
    const drugayaStoronaPriamougolnika = document.getElementById(`drugayaStoronaPriamougolnika`).value
    const ploschadPriamougolnika = document.getElementById(`ploschadPriamougolnika`)
    ploschadPriamougolnika.innerHTML = findRectangleArea (pervayaStoronaPriamougolnika, drugayaStoronaPriamougolnika)
}

function showResultInDomParalelograma(){
    const dlinaStoronyParalelograma = document.getElementById(`dlinaStoronyParalelograma`).value
    const dlinaVisotyParalelograma = document.getElementById(`dlinaVisotyParalelograma`).value
    const ploschadParalelograma = document.getElementById(`ploschadParalelograma`)
    ploschadParalelograma.innerHTML = findParalelArea (dlinaStoronyParalelograma, dlinaVisotyParalelograma)
}

function showResultInDomRomba(){
    const dlinaStoronyRomba = document.getElementById(`dlinaStoronyRomba`).value
    const dlinaVisotyRomba = document.getElementById(`dlinaVisotyRomba`).value
    const ploschadRomba = document.getElementById(`ploschadRomba`)
    ploschadRomba.innerHTML = findParalelArea (dlinaStoronyRomba, dlinaVisotyRomba)
}
