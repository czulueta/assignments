
const xhr = new XMLHttpRequest();
console.log(xhr)
xhr.open("GET", "https://api.vschool.io/pokemon ", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var name = data.name;
        const pokeList = data.objects[0].pokemon
        console.log(pokeList)
        pokeList.forEach(poke => {
        for(i = 0; i < pokeList.length; i++){
            let div = document.createElement('div')
            div.innerText = poke.name;
            let pListHTML = document.getElementById('name')
            pListHTML.appendChild(div)

        }
        document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl);
    }
};