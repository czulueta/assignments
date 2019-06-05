let form = document.addTodo
let todoList = []

axios.get("https://api.vschool.io/cesar/todo").then((response)=>{
    console.log(response.data)
    displayTodos(response.data)
})

function displayTodos(todos, updated){
    if(updated){
        document.getElementById("main").innerHTML = ""
    }
    todos.forEach((todo)=>{
        let parentDiv = document.createElement("div") 
        let titleH2 = document.createElement("h2")
        let descP = document.createElement("p")
        let checkBox = document.createElement("input")
        let imgUrl = document.createElement("img")
        let deleteBtn = document.createElement("button")
        imgUrl.className = "zoom"

        
        parentDiv.setAttribute("class","todoBox")
        imgUrl.setAttribute("src", todo.imgUrl)
        checkBox.setAttribute( "type","checkbox")

        titleH2.innerText = todo.title
        descP.innerText = todo.description
        deleteBtn.innerText = " Delete "

        deleteBtn.addEventListener("click",function(){
            parentDiv.style.display = "none"
            axios.delete(`https://api.vschool.io/cesar/todo/${todo._id}`)

        })
        checkBox.addEventListener("click", function(){
            checkTodo(todo)
            axios.get(`https://api.vschool.io/cesar/todo`).then( res => {
                todoList = res.data
            })
        
        })
        if (todo.completed){
            checkBox.checked = true
            parentDiv.style.textDecoration = "line-through"
        } else{
            parentDiv.style.textDecoration = "none"
        }
        parentDiv.appendChild(imgUrl)
        parentDiv.appendChild(titleH2)
        parentDiv.appendChild(descP)
        parentDiv.appendChild(deleteBtn)
        parentDiv.appendChild(checkBox)
        
        document.getElementById("main").appendChild(parentDiv)

    })
}
const checkTodo = oldTodo => {
    axios.put(`https://api.vschool.io/cesar/todo/${oldTodo._id}`, {completed: !oldTodo.completed}).then(response => {
        const newList = todoList.map(todo => todo._id === oldTodo._id ? response.data : todo)
        displayTodos(newList, true)
    })
}

form.addEventListener("submit", function(event){
    event.preventDefault()

    let title = form.title.value
    let description = form.description.value
    let price = form.price.value
    let imgUrl = form.imgUrl.value
    let newObject = {
        title,
        description,
        imgUrl,
        price
    }
    postTodo(newObject)
})

const postTodo = (newTodo) => {
    axios.post("https://api.vschool.io/cesar/todo", newTodo).then((response)=>{
        todoList.push(response.data)
        displayTodos([response.data])
    })
}


// function functionName(parameters){
//     console.log(parameters)
// }

// functionName(10)