let fs = require('fs');

fs.readFile('./git秘籍.txt', (error, data) => {
    if(error){
        return;
    }
    console.log(data.toString());
})

fs.writeFile('./test.txt', '我害怕鬼,贵却未伤我分毫', (error) => {

})