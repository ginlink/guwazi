import './App.css';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Router from './routes/routes';

export const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Router />
    </HashRouter>
  );
};
