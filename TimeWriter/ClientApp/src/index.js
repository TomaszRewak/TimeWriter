import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './native/scrolling';

import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/routing/routing';

const rootElement = document.getElementById('root');

ReactDOM.render(<Routing />, rootElement);

