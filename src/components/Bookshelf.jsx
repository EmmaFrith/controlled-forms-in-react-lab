import { useState } from 'react';


function Bookshelf() {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);


    const [newBook, setNewBook] = useState([
        { title: '', author: '' },
    ]);


    function handleTitleChange(e) {
        const createNewBook = structuredClone(newBook)
        createNewBook.title = e.target.value
        setNewBook(createNewBook)

    }

    function handleAuthorChange(e) {
        const createNewBook = structuredClone(newBook)
        createNewBook.author = e.target.value
        setNewBook(createNewBook)
    }


    function handleSubmit(e) {
        e.preventDefault()
        const addBookToShelf = structuredClone(books)
        addBookToShelf.push(newBook)
        setBooks(addBookToShelf)
        setNewBook({
            title: '',
            author: ''
        })
    }


    return <div className="bookshelfDiv">

        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                    type="text"

                    onChange={handleTitleChange}
                    value={newBook.title}
                />
                <input
                    placeholder="Author"
                    type="text"
                    onChange={handleAuthorChange}

                    value={newBook.author}
                />
                <button>
                    Add book
                </button>
            </form>
        </div>

        <div className="bookCardsDiv">
            {books.map((item, index) => {
                return <div className='bookCard' key={index}> <strong>{item.title}</strong>{item.author}</div>
            })}
        </div>

    </div>


}


export default Bookshelf