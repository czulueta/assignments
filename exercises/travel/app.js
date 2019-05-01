

let form = document.travelInfo

form.addEventListener("submit", function(e){
    e.preventDefault()
    let fName = form.firstName.value
    let lName = form.lastName.value
    let ages = form.age.value
    let genders = form.gender.value
    
    const locations = form.location 
    // const locationsArr = [];
    
    const localChoice = []
    // console.log('locations ', locations)
    for(let i = 0; i < locations.length; i++)
        if(locations[i].checked){
                localChoice.push(locations[i].value)
            }
            
        const diet = form.dietList
        const dietChoice = []
        for(let i = 0; i < diet.length; i++){
            if(diet[i].checked){
                dietChoice.push(diet[i].value)
            }
        }

        alert(`
            First Name: ${fName}
            Last Name:${lName}
            Age:${ages}
            Gender Association:${genders}
            Location:${localChoice}
            Dietary Requirements:${dietChoice}
        `)
    

})

