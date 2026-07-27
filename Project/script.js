let form = document.querySelector("#expense-form"); 
let name = document.querySelector("#expense-name");
let amount = document.querySelector("#expense-amount");
let list = document.querySelector("#expense-list");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const name_value = name.value;
    const amount_value = amount.value;

    console.log(typeof(amount_value))
})