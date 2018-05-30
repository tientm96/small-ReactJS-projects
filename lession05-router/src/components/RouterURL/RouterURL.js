//rcc 
import React, { Component } from 'react';

/*Component để quản lý toàn bộ Router*/ 

//import thư viện Router: https://reacttraining.com/react-router/web/example/basic
//BrowserRouter đc định danh gọn lại là Router.
//Ở đây chỉ dùng Route, nên chỉ giữ lại Route. Route dùng để định dạng "/san-pham" là đến comp Product.
import { Route, Switch } from "react-router-dom";

import Home from '../Home/Home';
import Product from '../Product/Product';
import Contact from '../Contact/Contact';
import Detail from '../Detail/Detail';

class RouterURL extends Component {
    render() {

        /* RouterURL: Nơi định dạng việc gọi đến não bộ component nào theo đường dẫn nhận đc tương ứng.
        Một dạng như swich case, trả đường dẫn về ntn thì Route sẽ gọi component cái đó ra chạy.

            Ở đây chỉ để import mỗi Route. 
        Route dùng để: nếu nhận link là "/san-pham" thì Route đến component Product để gọi code làm việc.*/

        /*Tại Nav.js: chổ khai báo tạo Menu, và cập nhật tên link. 
            Ở đây chỉ import mỗi Link thôi.
        Link ở Nav sẽ khai báo các Menu hiển thị, đồng thời set tên link "/san-pham" sẽ tương ứng 
        với từng Menu. Giải sử tại Menu Sản Phẩm thì tên link sẽ đc set là: /san-pham*/

        //Còn ở App.js: là nơi gọi Router tổng quát. Nên chỉ cần import BrowserRouter as Router
        
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/san-pham" component={Product} />
                    <Route path="/lien-he" component={Contact} />

                   {/*Khi nhận đc đường dẫn vào là /chi-tiet... thì mở component detail ra.
                    Ở file Item.js folder Product, đã format link chi tiết có dạng
                    http://localhost:3000/chi-tiet/4/gen-phone-9.html 
                    +Vì nhiều chi tiết khác nhau truyền vào, để nhận biết chung chung thì ghi theo kiểu
                    URL Parameters như :id, :slug*/}

                    <Route path="/chi-tiet/:id/:slug.html" component={Detail} />


                    {/*Trường hợp nhập đường dẫn sai =>path ko nhận đc đường dẫn nào cả=> nên path trống.                 
                    Ở đây ta muốn cho về Home (thay vì 104). Thì sẽ xét điều kiện path trống 
                    thì Route sẽ gọi về component Home.
                    
                        + Còn chạy về Home rồi thì bên Link sẽ tự set lại tên(theo Nav.js)*/}
                    <Route component={Home} />

                  
                    
                </Switch>
            </div>
        );
    }
}

export default RouterURL;



