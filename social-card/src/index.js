import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SocialCard from './socialcard.js';

ReactDOM.render(<SocialCard />, document.getElementById('root'));
registerServiceWorker();
