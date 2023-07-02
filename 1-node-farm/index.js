 const fs= require('fs'); //calling this function will return an object in which there are a lot of functions that we can use
//?BLOCKING SYNCHRONOUS WAY
// const { CLIENT_RENEG_LIMIT } = require('tls');
// const hello = "Hello world";
// console.log(hello);
// const textIn = fs.readFileSync('./final/txt/input.txt', 'utf-8'); //= synchronous version of file reading
// console.log(textIn);
// it has 2 arg. (1)- is the path to the file that we're reading
            //   (2)- the character encoded ( if u dont specify it u get a buffer)
            // by calling this function it will read the data from the file and return it to us


            // const textOut = `This is what we know abot avocado: ${textIn}.\nCreated on ${Date.now()}` 
            // fs.writeFileSync('./final/txt/input.txt', textOut);
            // console.log('file written successfully');

            // in sync programming = each line of code waits for the result of the previous line
            //this can be a problem= each line can block the execution of the rest of the code
            //synchronous code= blocking code 

            // in async programming 
            // node js process is single threaded
            // a thread is like a set of instructions that are executed in the computer's cpu
            //the thread is where our code is executed in a machine's processor
            // the code is run for each user that interacts with the application so when one user locks the single thread with synchronous code, then all the other users will have to wait for that execution to finish
            //  only when one user's execution is ready, the other users will be able to perform their tasks 
            // => terrible experience for the user
            // => your job as a developer to avoid this kind of situations 
            // using async/await help u reduce the callback hell 


//?Reading and writing files asynchronous

//?non-BLOCKING ASYNCHRONOUS WAY
fs.readFile('./final/txt/start.txt', 'utf-8', (err, data1) => {
    if(err) return console.log('ERROR');
    fs.readFile(`./final/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./final/txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err =>{
                console.log('your file has been written ');

            })
        });
    });
});
console.log('will read this file');

                                                





























































































































