import {bookElements} from './dom.js';
import {myLibrary} from './main.js';
function display() {
    const libraryTemplate = myLibrary.map((element, index) => `<div class="relative z-20 flex flex-col items-center h-40 w-36 mx-2 mt-3 bg-yellow-900 rounded shadow-2xl cursor-pointer" id="${element.title}">
    <button class="absolute z-30 left-32 -top-2" data-remove="true">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 bg-gray-200 rounded-3xl" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
    </button>
    <div class="text-white text-base text-center font-bold mt-3">${element.author}</div>
    <div class="text-white text-base text-center font-bold mt-3">${element.title}</div>
    <div class="text-white text-base text-center font-bold mt-3">${element.category}</div>
    <div id="state-handler">
    <div class="${element.classState}" data-index="${index}">${element.state}</div>
    </div>
    </div>
    `)
    bookElements().bookContainer.innerHTML = libraryTemplate.join('');
}

export { display }