import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';

//import thư viện Router: https://reacttraining.com/react-router/web/example/basic
//BrowserRouter đc định danh gọn lại là Router.
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/*Menu*/}
          <Nav></Nav>
          
          {/*Để  mở rộng viền ở trên cho phần body. Qua public, template, css, mystyle.css để thêm vào 
              độ rộng của margin-top, theo id main-content này.*/}                    
          <div className="container" id="main-content">
            {/*Tùy vào đường dẫn mà body sẽ load đúng component tương ứng của nó lên,
            nên bỏ comp RouterURL vào đây*/}
            <RouterURL></RouterURL>
            <Footer></Footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
