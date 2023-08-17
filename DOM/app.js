function joined() {
   let title =  document.getElementById("title");
   title.innerText = "Congratulations!!!";
   
}

function convert() {
    let m = document.getElementById("meter-input");

    let cm = m.value * 100;

    // console.log(cm);
    let finalResult = m.value+ "m" + " is " + cm + "cm";
    let result = document.getElementById("result");

    result.innerText = finalResult;
}