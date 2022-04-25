import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/:movieName' element={<MovieDetailPage />} />
        </Routes>
    );
}

export default App;
