let red = document.getElementById("rColor");
let green = document.getElementById("gColor");
let blue = document.getElementById("bColor");

let result = document.getElementById("Result");
let button = document.getElementById("addRecord");

let list = [{}];

button.addEventListener('click', () =>{
    let rCode = red.value.slice(0,2).toString(16);
    let gCode = green.value.slice(0,2).toString(16);
    let bCode = blue.value.slice(0,2).toString(16);
    switch(rCode){
        case '0':
            rCode = '00';
        break; 
    }
    switch(gCode){
        case '0':
            gCode = '00';
        break; 
    }
    switch(bCode){
        case '0':
            bCode = '00';
        break; 
    }
    let newHex = `#${rCode}${gCode}${bCode}`;
    document.body.style.backgroundColor = newHex;
    list.push({
        name: document.getElementById('name').value,
        color: newHex
    });
    localStorage.getItem('records', JSON.stringify(newHex));
});