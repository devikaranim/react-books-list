import { Link } from "react-router-dom";

const BooksList = ({books}) => {
    return (
        <div className="books-list">
            {books.map((book)=>(
                <div className="book-preview" key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <p>{book.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BooksList;