import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import 'whatwg-fetch';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));