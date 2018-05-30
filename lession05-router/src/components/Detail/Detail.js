//rcc 
import React, { Component } from 'react';

//import data.json.
//  ./ để xác nhận rằng đang ở thư mục hiện tại là Detail, buộc phải có
//  ../ để thoát ra thư mục mục bên ngoài nó. Mới vào đc thư mục Product.
import myData from './../Product/data.json';


class Detail extends Component {

    //Hàm định dạng giá tiền, project 3 có nói tới.
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }


    render() {
        /*Khi kích vào chi tiết thì mọi thông tin trong chi tiết là 1 object. Để xem hoặc lấy thông tin:
        +search "react router get params", vào https://stackoverflow.com/questions/35352638/react-router-how-to-get-parameter-value-from-url
            trong đó sẽ có "this.props.match.params.id" để lấy id.
        +Hoặc dùng console.log(this.props) để lấy ra object detail, rồi kiểm tra id chổ nào để lấy đường dẫn vào.
        */
        var pid = this.props.match.params.id;

        /*Kiểm tra pid===id dưới data, thì xuất dl data ra. Vậy phải import file data.json.
          +Khi kiểm tra === là đồng nhất, nên phải cùng 1 kiểu dl mới ktra đc.
          +kiểm tra kdl, xuất log: console.log(typeof(val.id)) ktra thấy val.id là number,
          còn pid là string. Vậy phải parse pid về Int.
            */
        pid = parseInt(pid, 10); //10 là radix tùy ý, ko cần quan tâm.

        return (
            <div>
                {   
                    myData.map((val, key) => {
                        // console.log(typeof(val.id));
                        if(val.id === pid){
                            return <div key={ key }> 
                                        <h1>{ val.ten }</h1>
                                        <h2>{ this.format_curency(val.gia) }</h2> 
                                    </div>
                        }
                        return '';
                    })
                }
                   
            </div>
        );
    }
}

export default Detail;