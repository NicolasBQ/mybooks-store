import {bookElements} from './dom.js';
import {myLibrary, saveArray} from './main.js';
import {Book} from './constructor.js'
function deleteBook() {
    const buttons = bookElements().buttons;
    buttons.forEach(function(button, i) {
        button.addEventListener('click', function(){
            button.parentNode.remove();
            myLibrary.splice(i, 1);
            saveArray(myLibrary);
            Book.bookProperties();
        })
    })
}

export { deleteBook }