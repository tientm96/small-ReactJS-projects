//rcc
import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="https://quoctuan.info/">QuocTuan.Info</a>
                <div className="collapse navbar-collapse" id="containerNavbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="trang-chu.html">Trang Chủ <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="the-loai.html">Thể Loại</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="san-pham.html">Sản Phẩm</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Nhập từ khóa" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                </form>
                </div>
            </nav>
        );
    }
}

export default Nav;