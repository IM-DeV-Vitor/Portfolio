var time = new Date()
var hours = time.getHours()
var span = document.getElementById("alter")
var header = document.getElementById("saudar")
var sobre_mim = document.getElementById("sobre-mim")
var tag_a_link_informativo = document.getElementById("link_informativo")

if (hours < 13){
    document.body.style.backgroundColor = "#B1E602"
    header.style.backgroundColor = "#02E60F"
    sobre_mim.style.backgroundColor = "#02E60F"
    span.innerHTML = "Olá, eu sou o Vitor!<br>Bom Dia!"
} else if (hours >= 13 && hours < 18){
    document.body.style.backgroundColor = "#E68700"
    header.style.backgroundColor = "#E61102"
    sobre_mim.style.backgroundColor = "#E61102"
    span.innerHTML = "Olá, eu sou o Vitor!<br>Boa Tarde!"
} else {
    document.body.style.backgroundColor = "#679CFF"
    header.style.backgroundColor = "#5712FF"
    sobre_mim.style.backgroundColor = "#5712FF"
    span.innerHTML = "Olá, eu sou o Vitor!<br>Boa Noite!"
    tag_a_link_informativo.style.backgroundColor = "white"
}
