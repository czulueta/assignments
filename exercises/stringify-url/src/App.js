function stringifyUrl(url, query) {
    return url + query

    const url = "http://localhost:8080/monkeys"
    const query = {
        color: "black",
        species: "howler"
    
}


stringifyUrl(url, query)
// returns "http://localhost:8080/monkeys?color=black&species=howler"

console.log(stringifyUrl())
