import Container from 'react-bootstrap/Container';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Posts from './components/Posts';
import PostPage from './pages/PostPage';
import InfoPage from './pages/InfoPage';
import ExplorePage from './pages/ExplorePage';
import ItemPage from './pages/ItemPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

export default function App() {
  return ( 
    <Container fluid className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/item/:itemname" element={<ItemPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
