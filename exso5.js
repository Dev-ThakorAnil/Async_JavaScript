//Write a JavaScript function that fetches data from multiple APIs concurrently and returns 
//a combined result using Promises and 'Promise.all()'.

function fetchApis(url){
    return fetch(url)
    .then (respons => {
        if(!respons.ok){
            throw error("Apis not faund....")
        }

        return respons.json();
    });
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
  ];

function multipaleApis(apiUrls){
    const promise = apiUrls.map(url => fetchApis(url));
    return Promise.all(promise);
}

multipaleApis(apiUrls)
.then(result => {
console.log("combine data..",result)
})

.catch(error =>{
console.log("Error..",error.message)
});