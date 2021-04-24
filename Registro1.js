let nameOne = prompt("Digite o nome da primeira pessoa")
let lastOne = prompt("Digite o sobrenome da primeira pessoa")
let ageOne = Number(prompt("Digite a idade da primeira pessoa"))
let colorOne = prompt("Digite a cor favorita da primeira pessoa")

let nameTwo = prompt("Digite o nome da segunda pessoa")
let lastTwo = prompt("Digite o sobrenome da segunda pessoa")
let ageTwo = Number(prompt("Digite a idade da segunda pessoa"))
let colorTwo = prompt("Digite a cor favorita da segunda pessoa")

let dadosPessoaUno = { 
    nameOne : nameOne,
    lastOne:lastOne,
    ageOne:ageOne, 
    colorOne:colorOne
}

let dadosPessoaDois = { 
    nameTwo : nameTwo,
    lastTwo:lastTwo,
    ageTwo:ageTwo, 
    colorTwo:colorTwo
}

if(dadosPessoaUno.ageOne>dadosPessoaDois.ageTwo){
    console.log(`${dadosPessoaUno.nameOne} es mais velho que ${dadosPessoaDois.nameTwo}`)
} else if(dadosPessoaUno.ageOne<dadosPessoaDois.ageTwo){
    console.log(`${dadosPessoaUno.nameOne} es mais novo que ${dadosPessoaDois.nameTwo}`)
}else{
    console.log(`${dadosPessoaUno.nameOne} e ${dadosPessoaDois.nameTwo} tem a mesma idade`)
}

if(dadosPessoaUno.colorOne===dadosPessoaDois.colorTwo){
    console.log(`${dadosPessoaUno.nameOne} e ${dadosPessoaDois.nameTwo} gostam da mesma cor, ${dadosPessoaDois.colorTwo} `)
}else{
    console.log(`Eles gostam de cores diferentes, ${dadosPessoaUno.nameOne} gosta do ${dadosPessoaUno.colorOne} e ${dadosPessoaDois.nameTwo} gosta do ${dadosPessoaDois.colorTwo}  `)
}