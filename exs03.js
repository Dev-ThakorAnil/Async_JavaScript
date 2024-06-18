//Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data


function make_Http_Get_Req (url){
 return new Promise((resolve,reject)=>{
    fetch(url)
    .then((response)=>{
        if(!response.ok){
          throw new Error('http error! status,${response.status}');
        }
    return response.json();
    })
    .then(data => resolve(data))
    .catch(error=> reject(error));
 });
}

make_Http_Get_Req('https://example.com/data')

.then(data=>{
console.log("data fetch done",data)
})

.catch(error=>{
    console.log("erorr",error.message)
});