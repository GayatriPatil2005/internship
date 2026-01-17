let Students = []

function AddStudent (e) {
    e.preventDefault();
    
   let input = document.getElementById("StudName");
   let name = input.value;

   if(name === ""){
    alert("Please enter a name");
   }

   Students.push(name);
   input.value = "";
}

