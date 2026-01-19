async function getData() {
    
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json();

    console.log(data);
    let list = document.querySelector(".list");
    data.forEach(user => {
        let entity = document.createElement("li");
        entity.textContent = user.name;
        list.appendChild(entity);
    });
}

getData()