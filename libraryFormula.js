function positiveTwoNumbers(numberOne, numberTwo){
    if (numberOne > 0 && numberTwo > 0){
        return numberOne * numberTwo
    } else {alert(`only numbers > 0. try again`)
    return``
    }
    
}
 
function findSquareArea (dlinaStoroniKvadrata){
    return positiveTwoNumbers(dlinaStoroniKvadrata, dlinaStoroniKvadrata)
}

function findRectangleArea (pervayaStoronaPriamougolnika, drugayaStoronaPriamougolnika){
    return positiveTwoNumbers(pervayaStoronaPriamougolnika, drugayaStoronaPriamougolnika)
}

function findParalelArea (dlinaStoronyParalelograma, dlinaVisotyParalelograma){
    return positiveTwoNumbers(dlinaStoronyParalelograma, dlinaVisotyParalelograma)
}

function findRombArea (dlinaStoronyRomba, dlinaVisotyRomba){
    return positiveTwoNumbers(dlinaStoronyRomba, dlinaVisotyRomba)
}
