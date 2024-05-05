import useFetch from "./useFetch";
import BooksList from "./BooksList";

const Home = () => {
    const {data:books,isPending, error } =useFetch('http://softwium.com/api/books')
    return (
        <div className="App">
           <div className="navbar">
            <h1>Books Lists</h1>
           </div>
            <div className="home">
                {error && <div>error</div>}
                {isPending && <div>Loading...</div>}
                {books && <BooksList books={books}/>}
            </div>
        </div>
    );
}
 
export default Home;