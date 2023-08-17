function joined() {
    let title = document.getElementById("title");
    title.innerText = "Congratulations!!!";

}

function convert() {
    let m = document.getElementById("meter-input");

    let cm = m.value * 100;

    // console.log(cm);
    let finalResult = m.value + "m" + " is " + cm + "cm";
    let result = document.getElementById("result");

    result.innerText = finalResult;

    m.value = " ";
}

function splitBill() {
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let bill = (amount.value / persons.value).toFixed(2);

    if (isNaN(bill)) {
        document.getElementById("result-3").innerText = "Enter a valid Number";
    } else {
        document.getElementById("result-3").innerText = bill;
    }
}


let users = [];
function add() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let user = {
        name: name,
        email: email
    }

    users.push(user);
}