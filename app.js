function Book(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;

}
function UI() { }

UI.prototype.AddBookToList = function (book) {
    const table = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
                <td> ${ book.author}</td >
                <td>${book.ISBN}</td>
                <td> <a gref="#" class="delete"> X </a> </td>`;
    table.appendChild(row);

}
UI.prototype.DeleteBook = function (book) {

    book.remove();
}
UI.prototype.deleteAlert = function() {
    const div= document.querySelector(".alert");
    console.log(div);
    div.remove();
}
document.querySelector('.btn').addEventListener('click', function (e) {

    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const isbn = document.querySelector('#isbn');
    if (title.value == "" || author.value == "" || isbn.value == "") {
        const container = document.querySelector('.container');
        const book_form = document.querySelector('#book-form');
        const div = document.createElement('div');
        div.className = "error alert";
        div.appendChild(document.createTextNode('Wrong Input!'));
        container.insertBefore(div, book_form);
        console.log("error");
        let ui = new UI();
        setTimeout(ui.deleteAlert , 3000);
    }
    else {
        const book = new Book(title.value, author.value, isbn.value);
        const ui = new UI();
        ui.AddBookToList(book);
        const container = document.querySelector('.container');
        const book_form = document.querySelector('#book-form');
        const div = document.createElement('div');
        div.className = "success alert";
        div.appendChild(document.createTextNode('Book Added!'));
        container.insertBefore(div, book_form);
        title.value="";
        author.value="";
        isbn.value="";
        setTimeout(ui.deleteAlert, 3000);
    }
    e.preventDefault();
});
document.querySelector("#book-list").addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const ui = new UI();
        ui.DeleteBook(e.target.parentElement.parentElement);
        //console.log(e.target.parentElement.parentElement );

    }
});