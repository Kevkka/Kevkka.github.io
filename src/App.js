import { Routes, Route } from 'react-router-dom';
import PageHeader from "./NavHeader";
import HomePage from "./HomePage";
import MoviePage from './pages/MoviePage';
import SeriesPage from './pages/SeriesPage';
import NewsPage from './pages/NewsPage';
import SingleMovie from './components/MoviePage/SingleMovie';
import SingleSeries from './components/SeriesPage/SingleSeries';

function App() {
  return (
    <>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:_id" element={<SingleMovie />} />


        <Route path="/series" element={<SeriesPage />} />
        <Route path="/series/:_id" element={<SingleSeries />} />


        <Route path ="/news" element={<NewsPage />}/>
      </Routes>
    </>
  );
}

export default App;