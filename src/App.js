import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import NotesPages from './pages/NotesPages';
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route component={NotesPages} path="/" exact />
          <Route component={NotePage} path="/note/:id" />
        </div>
      </div>
    </Router>
  );
}

export default App;
