document.addEventListener("DOMContentLoaded",()=>{
const myLibrary = ["The God","The Great","Peerless","Human Emperor"];

function Book(name) {
   
    this.name=name;
  
}

function addBookToLibrary(library) {
  const book_name=prompt("ENTER BOOK NAME AND AUTHOR NAME:");
  
  const book1=new Book(book_name);
  library.push(book1.name);
}
function display(library){
    for(const book of library){
        addBooksToScreen(book);
    }
}
function addBooksToScreen(book_names){
    const new_book=document.createElement("div");
    new_book.textContent=book_names;
    
    new_book.style.padding="10px";

    document.querySelector("#book_on_screen").appendChild(new_book);
}




addBookToLibrary(myLibrary);
display(myLibrary);
});                         