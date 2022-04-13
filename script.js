let ism = prompt("Isimingizni kiriting")
let year = +prompt(ism + " Hozirgi yilni kiriting")
let yourYear = +prompt(ism + " tug'ilgan yilingizni kiriting")


function calcSum(a,b){
    let sum = a - b
    return sum
}


alert("sizning yoshingiz " + calcSum(year, yourYear) +  " da")
