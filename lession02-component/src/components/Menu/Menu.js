import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            //B1: Để tách Header thành component riêng biệt, ta cắt các phần về header trong App.js qua Header.js  
            //B2: nhúng lại class Header.js này vào App.js bằng cách gõ <Header/>, vì App.js là nơi tổng hợp component
            //(Menu, Pane... làm tương tự.)
            
            <div id="menu">
                <ul>
                    <li><a href="a.html">Trang Chủ</a></li>
                    <li><a href="a.html">Giới Thiệu</a></li>
                    <li><a href="a.html">Sản Phẩm</a></li>
                    <li><a href="a.html">Tin Tức</a></li>
                    <li><a href="a.html">Liên Hệ</a></li>
                </ul>
            </div>
        );
    }
}

export default Menu;