var time = new Date()
var hours = time.getHours()
var span = document.getElementById("alter")

if (hours < 12){
    document.body.style.backgroundColor = "#679CFF"
    span.innerText = "Olá, eu sou o Vitor! Bom Dia!"
} else if (hours < 18 && hours > 12){
    document.body.style.backgroundColor = "#12B0FF"
    span.innerText = "Olá, eu sou o Vitor! Boa Tarde!"
} else {
    document.body.style.backgroundColor = "#12FBFF"
    span.innerText = "Olá, eu sou o Vitor! Boa Noite!"
}
