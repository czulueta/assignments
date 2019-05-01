// let form1 = document.bad1
// console.log('form1: ',form1)
// let form2 = document.bad2
// console.log('form2: ',form2)
// let form3 = document.bad3
// console.log('form3: ',form3)


// form1
let btn = document.getElementById("submitButton");
console.log(btn)
btn.addEventListener("click",function(e){
    e.preventDefault;
    let form1 = document.bad1.bobsCost.value
    console.log("form:",form1)
    let form2 = document.bad2.DeepsCost.value
    let form3 = document.bad3.EepsCost.value
    let baddie1 = form1 * 5
    let baddie2 = form2 * 7
    let baddie3 = form3 * 11
    let total = baddie1 + baddie2 + baddie3
    btn.innerText = `This is the Damage: for 5$ Bobs, 7$ Deeps, and 11$ Eeps = ${total}$ CASH ONLY!!!`
    

})


