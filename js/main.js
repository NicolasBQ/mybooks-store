import {domObjects} from './dom.js';
import { Book } from './constructor.js';

const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

function saveArray(arr) {
    const arrString = JSON.stringify(arr);
    localStorage.setItem('myLibrary', arrString);
}


window.onload = () => {
    domObjects();
    Book.bookProperties();
}


export { myLibrary, saveArray }







   

