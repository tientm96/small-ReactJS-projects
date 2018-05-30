/*FILE CHẠY CHÍNH VÀ ĐIỂU KHIỂN WEBSITE*/
/*FILE CHỨA CÁC CSS CHO COMPONENT APP*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //./App nằm trong App.js, là component
import registerServiceWorker from './registerServiceWorker';

//render (gửi) giao diện <App/> vào chổ html có id = 'root'. 
//<App/> gọi từ component trong App.js đã import.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/*Trong file App.js, các class App là 1 component. 
Comp đc tạo ra tại đây, rồi đưa lên index.js(file điều kiển) 
qua import và gọi thẳng, index.js sẻ đưa lên index.html 
bằng id như 'rood'. Bằng id="rood", index.html nhận đc 
component và hiển thị lên giao diện app.

Component App.js->import lên index.js-> id=rood index.html*/ 