import { Routes, Route } from 'react-router-dom';
import PageHeader from "./NavHeader";
import HomePage from "./HomePage";
import MoviePage from './pages/MoviePage';
import SeriesPage from './pages/SeriesPage';
import MovieItem from './components/MoviePage/MovieItem';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies" element={<MovieItem />} />


        <Route path="/series" element={<SeriesPage />} />

        <Route path ="/news" element={<NewsPage />}/>
      </Routes>
    </>
  );
}

export default App;