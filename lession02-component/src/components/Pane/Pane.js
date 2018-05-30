import React, { Component } from 'react';
import LeftPane from './LeftPane/LeftPane';
import RightPane from './RightPane/RightPane';
import ContentPane from './ContentPane/ContentPane';

class Pane extends Component {
    render() {
        return (
            //Video 5:
            //B1: Để tách Header thành component riêng biệt, ta cắt các phần về header trong App.js qua Header.js
            //B2: nhúng lại class Header.js này vào App.js bằng cách gõ <Header/>, vì App.js là nơi tổng hợp component
            //(Menu, Pane... làm tương tự.)
   
            //=>Nếu sau này trong header nhiều thẻ, ta vẫn có thể cắt ra từng file ở từng folder riêng.
            //Ở đây ta cắt src. Làm tương tự với các component khác. (Đã cắt ở Pane)
            
            <div id="pane">

                <LeftPane/>
            
                <ContentPane/>
            
                <RightPane/>                               
            </div>
        );
    }
}

export default Pane;