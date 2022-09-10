import { Header } from './components/Header';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Router from './routes/routes';

export const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Router />
      {/* <Layout>
        <Header />
        <Footer />
      </Layout> */}
    </HashRouter>
  );
};
