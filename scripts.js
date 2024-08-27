const form = document.querySelector(".form-fale-conosco")
const mascara = document.querySelector(".mascara-form")


function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "translate(-50%)"
    mascara.style.visibility = "visible"

}

function fecharForm(){
    form.style.left = "-300px"
    form.style.tranform = "translateX(0)"
    mascara.style.visibility = "hidden"

}
