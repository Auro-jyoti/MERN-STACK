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
    let amount = document.getElementById("amount");
    let persons = document.getElementById("persons");

    let bill = (amount.value / persons.value).toFixed(2);

    if (isNaN(bill)) {
        document.getElementById("result-3").innerText = "Enter a valid Number";
    } else {
        document.getElementById("result-3").innerText = bill;
    }
}

let users = [];

function notifyUserExist() {
    
}

function addUsers(userInput) {
    let checkUser = users.filter((user) => {
        return user.email == userInput.email;
    });

    if(checkUser.length == 0) {
        users.push(userInput);
    } else {
        notifyUserExist();
    }
    // users.push(userInput);
}

function displayUsers() {
    let usersContainer = document.getElementById("users");
    usersContainer.innerHTML = " ";
    users.map((a) => {
        let userDiv = document.createElement("div");
        userDiv.classList.add("user");
        let nameSpace = document.createElement("p");
        nameSpace.innerText = a.name;
        let emailSpace = document.createElement("p");
        emailSpace.innerText = a.email;

        usersContainer.appendChild(userDiv);
        userDiv.appendChild(nameSpace);
        userDiv.appendChild(emailSpace);
    });
}

function add() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    let user = {
        name: name.value,
        email: email.value,
    };

    addUsers(user);

    // users.push(user);

    displayUsers();
} 
