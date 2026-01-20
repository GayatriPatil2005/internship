async function getData() {
    
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await res.json();

    console.log(data);
    let list = document.querySelector(".list");
    data.forEach(user => {
        let entity = document.createElement("li");
        entity.innerHTML =
        `<Strong>id:</Strong>${user.id} <br/>
        <Strong>name:</Strong>${user.name} <br/>
        <Strong>email:</Strong>${user.email} <br/>
        <Strong>street:</Strong>${user.address.street} <br/>
        <Strong>city:</Strong>${user.address.city}<br/>
        <Strong>lat:</Strong>${user.address.geo.lat}<br/>
        <Strong>lng:</Strong>${user.address.geo.lng}<br/>
        <Strong>zipcode:</Strong>${user.address.zipcode}<br/>
        <Strong>suite:</Strong>${user.address.suite}<br/>
        `
        entity.style.background = "lightgray";
        entity.style.height = "400px";
        entity.style.width = "400px";
        list.appendChild(entity);
    });
}

getData()
