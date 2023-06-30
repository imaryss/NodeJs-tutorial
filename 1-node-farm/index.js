const fs= require('fs'); //calling this function will return an object in which there are a lot of functions that we can use
const { CLIENT_RENEG_LIMIT } = require('tls');
const hello = "Hello world";
console.log(hello);
const textIn = fs.readFileSync('./final/txt/input.txt', 'utf-8'); //= synchronous version of file reading
console.log(textIn);
// it has 2 arg. (1)- is the path to the file that we're reading
            //   (2)- the character encoded ( if u dont specify it u get a buffer)
            // by calling this function it will read the data from the file and return it to us


            const textOut = `This is what we know abot avocado: ${textIn}.\nCreated on ${Date.now()}` 
            fs.writeFileSync('./final/txt/input.txt', textOut);
            console.log('file written successfully');