import {bookAlert} from './bookalert.js';
import {colorIdentifier} from './identifier.js';

function domObjects() {
    const newBook = document.getElementById('new-book'); 
    //Books Topics//
    const bussiness = document.getElementById('bussiness'); 
    const motivation = document.getElementById('motivation'); 
    const fiction = document.getElementById('fiction'); 
    const fantasy = document.getElementById('fantasy'); 
    const mistery = document.getElementById('mistery'); 
    const science = document.getElementById('science'); 
    const health = document.getElementById('health'); 
    const literature = document.getElementById('literature'); 
    const history = document.getElementById('history'); 
    const suspense = document.getElementById('suspense'); 
    //Events//
    newBook.addEventListener('click', bookAlert);
    bussiness.addEventListener('click', function() {
        colorIdentifier('Bussiness', 'bg-blue-500');
    });
    motivation.addEventListener('click', function() {
        colorIdentifier('Motivation', 'bg-yellow-500');
    });
    fiction.addEventListener('click', function() {
        colorIdentifier('Science Fiction', 'bg-gray-500');
    });
    fantasy.addEventListener('click', function() {
        colorIdentifier('Fantasy', 'bg-yellow-700');
    });
    mistery.addEventListener('click', function() {
        colorIdentifier('Mistery', 'bg-green-500');
    });
    science.addEventListener('click', function() {
        colorIdentifier('Science', 'bg-green-700');
    });
    health.addEventListener('click', function() {
        colorIdentifier('Health', 'bg-green-500');
    });
    literature.addEventListener('click',function() {
        colorIdentifier('Literature', 'bg-blue-500');
    });
    history.addEventListener('click', function() {
        colorIdentifier('History', 'bg-yellow-500');
    });
    suspense.addEventListener('click', function() {
        colorIdentifier('Suspense', 'bg-gray-700');
    });
}

function bookElements() {
    const bookContainer = document.getElementById('books-container'); 
    const buttons = document.querySelectorAll('#book-section button'); 
    const stateHandler = document.querySelectorAll('#state-handler div');

    return {bookContainer, buttons, stateHandler}
}


export { domObjects, bookElements }