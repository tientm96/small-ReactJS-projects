//Đã cài Reactjs code snippets nên chỉ cần gõ "rcc" rồi enter để tạo 1 khung class.js mới

import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            //B1: Để tách Header thành component riêng biệt, ta cắt các phần về header trong App.js qua Header.js
            <div id="header">
                <img src="template/img/banner.png" alt="Sản phẩm" />
            </div>

            //B2: nhúng lại class Header.js này vào App.jsbằng cách gõ <Header/>, vì App.js là nơi tổng hợp component
            //(Menu, Pane... làm tương tự.)

            //=>Nếu sau này trong header nhiều thẻ, ta vẫn có thể cắt ra từng file ở từng folder riêng.
            //Ở đây ta cắt src. Làm tương tự với các component khác. (Đã cắt ở Pane)
            
        );
    }
}

export default Header;