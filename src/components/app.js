import React from 'react'
import Routes from './Routes'
import Home from './home';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
  <BrowserRouter>
    	<Routes />
  </BrowserRouter>
  </div>
)

export default App
