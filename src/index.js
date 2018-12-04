import React from 'react';
import { render } from 'react-dom';
import './components/Global/css/index.css';
import './components/Core/Header/header.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
