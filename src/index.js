import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './components/Global/css/index.css';
import './components/Core/Header/header.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './components/store';

ReactDOM.render( <Provider store={store}> 
					<App />, 
				</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
