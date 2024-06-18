//Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence 
//using Promises and 'async/await'.

function asyncOpration (message,delay){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
          resolve(message);
        },delay)
    });
}


async function oprations(){
    try{
    console.log("opration 1 is runnig......")
    const opration1 = await asyncOpration("opration 1 is complate ✅",2000);
    console.log(opration1);

    console.log("opration 2 is runnig......")
    const opration2 = await asyncOpration("opration 2 is complate ✅",1000);
    console.log(opration2);

    console.log("opration 3 is runnig......")
    const opration3 = await asyncOpration("opration 3 is complate ✅",1500);
    console.log(opration3);

    console.log("opration 4 is runnig......")
    const opration4 = await asyncOpration("opration 4 is complate ✅",5000);
    console.log(opration4);

    console.log("opration 5 is runnig......")
    const opration5 = await asyncOpration("opration 5 is complate ✅",3000);
    console.log(opration5);
    }catch{
        console.log("error eccoure",error);
    }
}

oprations();