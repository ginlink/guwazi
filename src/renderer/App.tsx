import { Header } from './components/Header';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Pages from './routes/Pages';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <Pages />
      <Footer />
    </HashRouter>
  );
};
