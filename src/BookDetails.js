import useFetch from "./useFetch";
import { useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
    const {id} =useParams();
    const {data:book, isPending,error}= useFetch('http://softwium.com/api/books/'+id);
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className="book-details">
            {error && <div>error</div>}
            {isPending && <div>Loading...</div>}
            {book && (
                <article>
                    <h1>Book Details</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Title:</th>
                                <td className="title">{book.title}</td>
                            </tr>
                            <tr>
                                <th>ISBN:</th>
                                <td>{book.isbn}</td>
                            </tr>
                            <tr>
                                <th>Page Count:</th>
                                <td>{book.pageCount}</td>
                            </tr>
                            <tr>
                                <th>Authors:</th>
                                <td>{book.authors}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleClick}>Back To Home</button>
                </article>
            )}
        </div>
    );
}
 
export default BookDetails;