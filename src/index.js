import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import RootApp from './root-app/root-app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RootApp />, document.getElementById('root'));

serviceWorker.unregister();
