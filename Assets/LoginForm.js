let form = document.querySelector(".MyForm")
let Email = document.getElementsByClassName("email")
let  Name = document.getElementsByClassName("name")
let Error = document.querySelector(".err")

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(Email.value)
    console.log(Name.value)

    if(Email.value == "" || Name.value == "")
    {
        Error.style.color = "Red"
        Error.textContent = "Please fill in all fields";
    }
})