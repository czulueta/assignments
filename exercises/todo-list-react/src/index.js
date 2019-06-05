import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(
    <TodoProvider>
        <App />
    </TodoProvider>
    ,
    document.getElementById("root")
)
