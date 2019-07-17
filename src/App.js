import React from 'react';
import './App.css';
import routes from './routes'
import {HashRouter} from 'react-router-dom'
function App() {
  return (
    <HashRouter>
{routes}
    </HashRouter>
  );
}

export default App;
