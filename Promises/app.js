// console.log("task1")
// // console.log('task2')
// console.log("task3")


// setTimeout(() => {
//     console.log("task2");
// }, 1000);


// // you can use different names in place of resolve and reject.

// // resolve means what ever task is given / assigned is completed, reject means whatever task was assigned did not complete on time.

// // resolve and reject are the parameters

// let startDownload = new Promise((resolve, reject) => {
//     console.log("download-started")
//     setTimeout(() => {
//         console.log("downloading....");
//         // resolve();
//         reject();
//     }, 3000);
// })

// startDownload.then(() => {
//     console.log("download-completed!");
// }, () => {
//     console.log("download-Failed");
// });


// // fetch => default functionality to fetch the data from the url that is given.

// fetch('https://type.fit/api/quotes').then((data) => {
//     return data.json();
// }).then ((data) => {
//     console.log(data);
// })

fetchQuote = () => {
    let randomQuoteIndex = Math.floor(Math.random() * 15);
    console.log(randomQuoteIndex);
    fetch('https://type.fit/api/quotes').then((response) => {
        return response.json();
    }).then((quotes) => {
        // console.log(quotes[randomQuoteIndex].text);
        document.getElementById('quote').innerText = quotes[randomQuoteIndex].text;
        document.getElementById('author').innerText = quotes[randomQuoteIndex].author;
    }); 
}

fetchQuote();