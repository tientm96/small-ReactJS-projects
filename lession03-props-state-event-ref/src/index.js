import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'; //sửa lại đường dẫn tới App.js
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //gửi App.js qua index.html
registerServiceWorker();
