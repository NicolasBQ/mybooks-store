import Swal from '../node_modules/sweetalert2/src/sweetalert2.js';
import {myLibrary, saveArray} from './main.js';
import {Book} from './constructor.js'

async function bookAlert() {
    const { value: formValues } = await Swal.fire({
        title: 'BOOKS',
        showCancelButton: true,
        allowOutsideClick: false,
        confirmButtonText: 'DONE',
        position: 'top',
        html:
        '<form class="flex flex-col items-center" id="form-add">' +
        '<input type="text" placeholder="Author" id="swal-input1" required class="block mt-2 mx-auto h-12 w-64 border-2 border-blue-500 rounded-2xl pl-2">' +
        '<input type="text" placeholder="Title" id="swal-input2" required  class="block mt-2 mx-auto h-12 w-64 border-2 border-blue-500 rounded-2xl pl-2">'+
            `<select name="category" id="swal-input3"  class="block mt-2 mx-auto h-12 w-64 border-2 border-blue-500 rounded-2xl pl-2 cursor-pointer" required> 
                <option value="Bussiness">Bussiness</option>
                <option value="Motivation">Motivation</option> 
                <option value="Science Fiction">Science Fiction</option> 
                <option value="Fantasy">Fantasy</option> 
                <option value="Science">Science</option>
                <option value="Health">Health</option>' 
                <option value="Literature">Literature</option> 
                <option value="History">History</option> 
                <option value="Suspense">Suspense</option> 
            </select>` +
            `<select name="state" id="swal-input4"  class="block mt-2 mx-auto h-12 w-64 border-2 border-blue-500 rounded-2xl pl-2 cursor-pointer" required> 
                <option value="Read">Read</option>
                <option value="Not Read">Not Read</option>
            </select>` +      
        '</form>',
        focusConfirm: false,
        preConfirm: function() {              
            const author = document.getElementById('swal-input1').value;
            const title =  document.getElementById('swal-input2').value;
            const category = document.getElementById('swal-input3').value;
            const state = document.getElementById('swal-input4').value;
            if(author && title && category && state) {
                const books = new Book(author, title, category, state);
                myLibrary.push(books);
                Book.bookProperties();
                saveArray(myLibrary);
            }                           
        } 
    })
}

export { bookAlert }