import {myLibrary} from './main.js';


function colorIdentifier(category, color) {
    for(let x of myLibrary) {
        const p = document.getElementById(x.title);
        if(x.category === category) {
          p.className = `relative z-20 flex flex-col items-center h-40 w-36 mx-2 mt-3 ${color} rounded shadow-2xl cursor-pointer`;
        setTimeout(function(){
            p.className = 'relative z-20 flex flex-col items-center h-40 w-36 mx-2 mt-3 bg-yellow-900 rounded shadow-2xl cursor-pointer'
        }, 2000)  
        }    
    }
}

export {colorIdentifier}