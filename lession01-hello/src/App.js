/*FILE TẠO COMPONENT APP*/
//component chính là button hay list hay textbox gì đó

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


/*Trong file App.js, các class App là 1 component. 
Comp đc tạo ra tại đây, rồi đưa lên index.js(file điều kiển) 
qua import và gọi thẳng, index.js sẻ đưa lên index.html 
bằng id như 'rood'. Bằng id="rood", index.html nhận đc 
component và hiển thị lên giao diện app.

Component App.js->import lên index.js-> id=rood index.html*/ 

class App extends Component { 
  render() { //là xuất ra 1 cái gì đó, ở đây render ra giao 
            //diện bọc trong return(); 
    return (
      /*Các<div classNam App, App-header, App-logo, App-title,
      App-intro>... là các thẻ được custom trong App.css. 
      Tại App.css sẽ custom màu, kích cỡ... rồi gọi trong App.js.

      Vậy: App.js tạo component->App.css custom các component đó.
      */
      <div className="App">
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Minh Tiến Đẹp Trai</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
