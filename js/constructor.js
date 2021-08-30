import {display} from './display.js';
import {classStyle} from './style.js';
import {access} from './access.js';
import {deleteBook} from './remove.js';

class Book {
    constructor(author, title, category, state) {
        this.author = author;
        this.title = title;
        this.category = category;
        this.state = state;
        this.classState;
    }

    static bookProperties() {
        classStyle(this.state);
        display();
        access();
        deleteBook();
    }
}

export { Book }