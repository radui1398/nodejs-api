var container = document.getElementsByClassName("result")[0];

var buttons = document.getElementsByTagName("a");
console.log(buttons);
for (let button of buttons) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        fetch(this.href).then((response) => {
            response.json().then((data) => {
                container.innerHTML = "";
                data.result.forEach((person) => {
                    var node = document.createElement("p");
                    var textnode = document.createTextNode("Nume: " + person.name + " - Varsta: " + person.age);
                    node.appendChild(textnode);
                    container.appendChild(node);
                })
            });
        })
    });
}

