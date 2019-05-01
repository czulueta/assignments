let form = document.myForm;

form.addEventListener('submit', function(event){
    event.preventDefault()
    let name = form.yourName.value
    let age = form.age.value

    let person = {
        name: name,
        age: age
    }
    console.log(name)
    console.log(age)
    console.log(person)
})

console.log(`The ${adjevtive} ${non} ${adverb} and did other stuff too`)// template literal

document.getElementById("results").innerHTML = `<h1>${madLib}</h1>`
document.form.