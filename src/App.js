import { Routes, Route } from 'react-router-dom';
import PageHeader from "./NavHeader";
import HomePage from "./HomePage";
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;