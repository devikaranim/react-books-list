import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound">
            <h1>Page Not Found</h1>
            <Link to='/'>Back to home page</Link>
        </div>
    );
}
 
export default NotFound;