//rcc 
import React, { Component } from 'react';
import Item from './Item';

//copy file data.json của thầy vào folder Product. Gọi nó ra sd bằng import, vì cùng nằm trong 1 folder
//nên import chỉ cần ./data.json là đc, ko cần đường dẫn từ bên ngoài.
import myData from './data.json';

//Là print sản phẩm.
class Product extends Component {

    //Hàm định dạng giá tiền, project 3 có nói tới.
    //vì giá trong file json ko định dạng chuỗi hay số, nên replace ở đây ko đc. Nên phải toString.

    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }


    


    render() {
        return (
            //vào file sanpham.html của thầy. copy phần thẻ div chứa product trong thẻ chứa container.
            //Nhớ chuyển sang JSX.

            <div id="products" className="row list-group">
                {/*Ở đây trong chidren đưa vào tham số, ở Item nhận lấy tham số bằng props.
                Dùng .map để duyệt mảng, val là giá trị mỗi phần tử đc duyệt.*/}

                {
                    myData.map( (val, key) => {
                        return <Item pid={ val.id } price={ this.format_curency(val.gia) } key={ key }>{ val.ten }</Item> 
                    })
                }


            </div>
        );
    }
}

export default Product;

