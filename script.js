const um = document.querySelector(".um")
const dois = document.querySelector(".dois")
const tres = document.querySelector(".tres")
const quatro = document.querySelector(".quatro")
const cinco = document.querySelector(".cinco")
const seis = document.querySelector(".seis")
const sete = document.querySelector(".sete")
const oito = document.querySelector(".oito")
const nove = document.querySelector(".nove")
const zero = document.querySelector(".zero")
const somar = document.querySelector(".somar")
const subtrair = document.querySelector(".subtrair")
const limpar = document.querySelector(".limpar")
const dividir = document.querySelector(".dividir")
const multiplicar = document.querySelector(".multiplicar")
const igual = document.querySelector(".igual")
const virgula = document.querySelector(".virgula")






let display = document.querySelector(".numerosDoCalculo")

let numeros = ("")

um.addEventListener('click', ()=> {
    numeros =  (numeros + "1")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
dois.addEventListener('click', ()=> {
    numeros =  (numeros + "2")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
tres.addEventListener('click', ()=> {
    numeros =  (numeros + "3")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
quatro.addEventListener('click', ()=> {
    numeros =  (numeros + "4")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
cinco.addEventListener('click', ()=> {
    numeros =  (numeros + "5")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
seis.addEventListener('click', ()=> {
    numeros =  (numeros + "6")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
sete.addEventListener('click', ()=> {
    numeros =  (numeros + "7")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
oito.addEventListener('click', ()=> {
    numeros =  (numeros + "8")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
nove.addEventListener('click', ()=> {
    numeros =  (numeros + "9")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
zero.addEventListener('click', ()=> {
    numeros =  (numeros + "0")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})



multiplicar.addEventListener('click', ()=> {
    numeros =  (numeros + "*")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})

subtrair.addEventListener('click', ()=> {
    numeros =  (numeros + "-")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
somar.addEventListener('click', ()=> {
    numeros =  (numeros + "+")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
dividir.addEventListener('click', ()=> {
    numeros =  (numeros + "/")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
limpar.addEventListener('click', ()=> {
    numeros =  ""
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">0</h1>
</div>`
})

virgula.addEventListener('click', ()=> {
    numeros =  (numeros + ".")
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})
igual.addEventListener('click', ()=> {
    numeros = eval(numeros)
    display.innerHTML = `<div class="numerosDoCalculo">
    <h1 class="valores">${numeros}</h1>
</div>`
})