import {myLibrary} from './main.js'

function classStyle(state) {
    myLibrary.forEach((element, index) => {
        if(myLibrary[index].state === 'Read') {
            myLibrary[index].classState = 'cursor-pointer h-8 w-32 mt-2 bg-green-500 text-white text-center font-semibold rounded-xl hover:bg-green-600';
        } else {
            myLibrary[index].classState = 'cursor-pointer h-8 w-32 mt-2 bg-red-500 text-white text-center font-semibold rounded-xl hover:bg-red-600';
        }
    })
}

export { classStyle }