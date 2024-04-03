let listOf = document.getElementById("jsonlist");
let ppp = document.createElement("p")

let searchParams = new URLSearchParams(window.location.search)
let name = searchParams.get('name')
let lastname = searchParams.get('lastname')

ppp.innerHTML = `NAME: ${name}, LAST NAME: ${lastname}`

listOf.appendChild(ppp)

