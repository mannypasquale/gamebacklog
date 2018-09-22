import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
require('./index.css');
require('./App.css');
ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
