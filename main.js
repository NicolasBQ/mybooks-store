//APP
const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];
const bookContainer = document.getElementById('books-container');
window.onload = () => {Book.display()};
//Book class//
class Book {
    constructor(author, title, category, state) {
        this.author = author;
        this.title = title;
        this.category = category;
        this.state = state;
        this.classState;
    }

    style() {
        if(this.state === 'Read') {
            this.classState = 'cursor-pointer h-8 w-32 mt-2 bg-green-500 text-white text-center font-semibold rounded-xl hover:bg-green-600';
        }
        else {
            this.classState = 'cursor-pointer h-8 w-32 mt-2 bg-red-500 text-white text-center font-semibold rounded-xl hover:bg-red-600';
        }
    }

    static display() {
        let libraryTemplate = myLibrary.map((element, index) => `<div class="relative z-20 flex flex-col items-center h-40 w-36 mx-2 mt-3 bg-yellow-900 rounded shadow-2xl cursor-pointer">
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
        bookContainer.innerHTML = libraryTemplate.join('');
        this.access();
        this.deleteBook();  
    }

    static deleteBook() {
        const buttons = document.querySelectorAll('#book-section button');
        buttons.forEach(function(button, i) {
            button.addEventListener('click', function(){
                const parent = button.parentNode;
                parent.remove();
                myLibrary.splice(i, 1);
                save(myLibrary)
                console.log(myLibrary);
            })
        })
    }

    static access() {
        let stateHandler = document.querySelectorAll('#state-handler div');
        stateHandler.forEach((element, i) => {
            element.addEventListener('click', () => {
                if(element.textContent == 'Read') {
                    myLibrary[i].state = 'Not Read';
                    myLibrary[i].style();
                    console.log(myLibrary[i]);
                    save(myLibrary);
                    Book.display();
                } else {
                    myLibrary[i].state = 'Read';
                    myLibrary[i].style();
                    save(myLibrary);
                    Book.display();
                }
            })
        })
    }
}

//ADD A NEW BOOK FORM
document.getElementById('new-book').addEventListener('click', function() {
    (async () => {
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
                    books.style();
                    myLibrary.push(books);
                    console.log(myLibrary);
                    save(myLibrary)
                    Book.display();
                }                           
            } 
          })
    })()
});

//SAVING THE BOOK
function save(arr) {
    const arrString = JSON.stringify(arr);
    localStorage.setItem('myLibrary', arrString)
}
//CATEGORIES SEARHCER
function categories(category, color) {
    for(let x of myLibrary) {
        const p = document.getElementById(x.title).parentNode;
        if(x.category === category) {
          p.className = `relative z-20 flex flex-col items-center h-40 w-36 mx-2 mt-3 ${color} rounded shadow-2xl cursor-pointer`;
        setTimeout(function(){
            p.className = 'relative z-20 flex flex-col items-center h-40 w-36 mx-2 mt-3 bg-yellow-900 rounded shadow-2xl cursor-pointer'
        }, 2000)  
        }    
    }
}

document.getElementById('bussiness').addEventListener('click', function() {
    categories('Bussiness', 'bg-blue-500');
});

document.getElementById('motivation').addEventListener('click', function() {
    categories('Motivation', 'bg-yellow-500');
});

document.getElementById('fiction').addEventListener('click', function() {
    categories('Science Fiction', 'bg-gray-500');
});

document.getElementById('fantasy').addEventListener('click', function() {
    categories('Fantasy', 'bg-yellow-700');
});

document.getElementById('mistery').addEventListener('click', function() {
    categories('Mistery', 'bg-green-500');
});

document.getElementById('science').addEventListener('click', function() {
    categories('Science', 'bg-green-700');
});

document.getElementById('health').addEventListener('click', function() {
    categories('Health', 'bg-green-500');
});

document.getElementById('literature').addEventListener('click', function() {
    categories('Literature', 'bg-blue-500');
});

document.getElementById('history').addEventListener('click', function() {
    categories('History', 'bg-yellow-500');
});

document.getElementById('suspense').addEventListener('click', function() {
    categories('Suspense', 'bg-gray-700');
});








   

