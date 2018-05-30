import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*Vì đã bỏ App.js và App.css vào folder riêng, nên phải chỉnh lại đường dẫn tới  component đấy.
Vì ở đây đang là index.js, nằm ngoài fordel App, nên phải có đường dẫn rõ ràng.*/

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

