let favNum = 8;
let baseUrl = 'http://numbersapi.com'


async function req_API() {
    let res = await $.getJSON(`${baseURL}/${favNum}?json`);
    console.log(res);
}
req_API();

// 2. 
const favNums = [4, 8, 12];
async function multi_Reqs() {
    let res = await $.getJSON(`${baseUrl}/${favNums}?json`);
    console.log(res);
}
multi_Reqs();

//3.
async function num_Facts() {
    let res = await Promise.all(
        Array.from({
            length: 4
        }, () => $.getJSON(`${baseUrl}/${favNum}?json`))
    );
    res.forEach(fact => {
        $('body').append(`<p>{fact.text}</p>`);
    });
}
fourFacts();