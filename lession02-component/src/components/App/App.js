import React, { Component } from 'react';

//App.js đã nằm trong folder App, nên chỉ cần đem file logo.svg vào folder App, nữa là xong. Cùng nằm song song trong
//một folder, nên ko cần đường dẫn kiểu './components/App/logo.svg

//import logo from './logo.svg'; 

import './App.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Pane from '../Pane/Pane';
import Lower from '../Lower/Lower';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      //Video 4:
      //Phần thân JSX, chuyển từ các component html qua. Xem giải thích tại index.html.
      //Trong này bao gồm các component header, menu, pane, footer...
      //className="clear" vì ko có nội dung gì nên ko cần có thẻ đóng

      //Video 5:
      //B1: Để tách Header thành component riêng biệt, ta cắt các phần về header trong App.js qua Header.js
      //B2: nhúng lại class Header.js này vào App.js bằng cách gõ <Header/>, vì App.js là nơi tổng hợp component
      //(Menu, Pane... làm tương tự.)
      //ClassName=clear ko có nội dung gì, nên ko cần tách
      
      //=> Như vậy, khi F12 trên browser, vào React, ta sẽ thấy từng phần riêng biệt, dễ tìm.
      <div id="wrapper">
        
        <Header />         
        
        <Menu></Menu>
        
        <Pane />
        
        <div className="clear" />
        
        <Lower></Lower>
        
        <div className="clear" />
        
        <Footer/>
      </div>
      
    );
  }
}

export default App;
