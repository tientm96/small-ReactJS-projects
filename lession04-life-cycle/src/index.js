import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//test unmounting: xóa gắn kết của component, hay là remove component.
//Muốn xóa component thì phải xóa bên nhánh cha, nên phải xóa ở đây, xóa ở App.js ko đc.

//Vừa bật lên mà xóa thì ko hay, ta muốn 5s sau mới xóa.
//sto
setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));        
}, 5000); //5s

registerServiceWorker();
