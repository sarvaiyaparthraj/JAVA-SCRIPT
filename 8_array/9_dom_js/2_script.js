// click btn

let btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    alert("btn click")
});


// submit btn


document.getElementById("form").addEventListener("submit", (e) => {

    e.preventDefault();

    const task = document.getElementById("task").value;
    const btn = document.getElementById("btn")

console.log(task)
   
});

