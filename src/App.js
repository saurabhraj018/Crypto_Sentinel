import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#14161a', color: 'white', minHeight: '100vh' }}>
        <Header />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
