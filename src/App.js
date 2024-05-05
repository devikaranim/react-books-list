import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BookDetails from './BookDetails';
import NotFound from './NotFound';

function App() {
  return (
    <div className="app">
      <Router basename="/react-books-list">
        <div className="content">
          <Routes>
            <Route exact path='/react-books-list' element={<Home />} />
            <Route path='/books/:id' element={<BookDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

