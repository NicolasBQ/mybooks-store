import {bookElements} from './dom.js';
import {myLibrary, saveArray} from './main.js';
import {Book} from './constructor.js';

function access() {
    let stateHandler = bookElements().stateHandler; //(3)
    stateHandler.forEach((element, i) => {
        element.addEventListener('click', () => {
            if(element.textContent == 'Read') {
                myLibrary[i].state = 'Not Read';
                Book.bookProperties();
                saveArray(myLibrary);
            } else {
                myLibrary[i].state = 'Read';
                Book.bookProperties();
                saveArray(myLibrary);
            }
        })
    })
}

export {access};

