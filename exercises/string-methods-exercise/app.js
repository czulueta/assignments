var joom = "hello"

function toUpCase(str){
   
   let strUp = str.toUpperCase();
   let strDown = str.toLowerCase();
   return strUp + strDown

}

console.log(toUpCase(joom))

function halfie(par){
   let dividePar = par / 2
   let roundedPar = Math.floor(dividePar)
   return roundedPar
}
console.log(halfie(10.02))

var wowzers = 'peaceout'
console.log(wowzers.length)

function wow(p){
   let pLength = p.length
   // discovers the length of p
   let divLength = pLength / 2
   // divides the length of p by 2
   let roundD = Math.floor(divLength)
   // rounding down the divided length of p
   return p.slice(0,roundD)
   // slicing p, starting at 0 and ending at half of p
}

console.log(wow("sammy"))
