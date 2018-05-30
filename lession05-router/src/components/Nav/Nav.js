//component chứa các Menu
//rcc
import React, { Component } from 'react';

//chỉ dùng link, nên chỉ cần giữ lại link, các tham số khác xóa đi.
import { NavLink } from "react-router-dom";


class Nav extends Component {
    render() {
        return (
            // copy thẻ nav chứa menu vào. Nhớ chuyển sang JSX.
            //chỉnh lại all thẻ <href="">
            
            <nav className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="">QuocTuan.Info</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">                      
                        <ul className="nav navbar-nav">
                           
                            {/*Tại Nav.js: chổ khai báo tạo Menu, và cập nhật tên link. 
                                Ở đây chỉ import mỗi Link thôi.
                            
                            Link ở Nav sẽ khai báo các Menu hiển thị, đồng thời set tên link "/san-pham" 
                                sẽ tương ứng với từng Menu. 
                            Giải sử tại Menu Sản Phẩm thì tên link sẽ đc set là: /san-pham*/}

                            {/*Vào mục <NavLink>, sẽ có cấu trúc NavLink, copy tương tự.
                                active: là tùy thuộc vào css đặt tên gì, thì đặt theo.*/}
                            <li><NavLink to="/" activeClassName="active" activeStyle={{
                                fontWeight: 'bold',
                                color: 'red'
                               }}>Trang Chủ</NavLink></li>
                            <li><NavLink to="/san-pham" activeClassName="active">Sản Phẩm</NavLink></li>
                            <li><NavLink to="/lien-he" activeClassName="active">Liên Hệ</NavLink></li>

                            
                        </ul>

                    </div>{/* /.nav-collapse */}
                </div>{/* /.container */}
          </nav>
          
        );
    }
}

export default Nav;