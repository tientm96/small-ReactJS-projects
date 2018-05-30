import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Product from '../Product/Product';
import Modal from '../Modal/Modal';

//component Product.js đc gọi vào. Vì App.js mặc định luôn là nơi chứa component.
//Tương tự Modal cũng đc gọi vào.


/*VIDEO 7, PROPS:
Các thuộc tính của từng component ta bỏ trong thẻ khai báo ở đây. 
  Và dùng lệnh props để gọi đến từng thuộc tính ở cấu trúc trong Product.js

  =>  props là công cụ để hổ trợ lấy những thuộc tính ở trong component.

+ <Product >Laptop</Product>: Laptop ở giữa là giá trị của thuộc tính children (ở giữa mặc định gọi là children).
  Ở cấu trúc Product.js sẽ gọi đến thuộc tính children bằng { this.props.children }

+ Tương tự thuộc tính price, ở cấu trúc Product.js sẽ gọi bằng { this.props.price }

+ images="/images/products/p1.png": mặc định images sẽ ở trong folder public, ở file html thì mới bỏ %PUBLIC% cho rõ ràng.

+ hot={true}: thuộc tính hot chứa giá trị HOT trong Product.js có đc hiển thị lên ko, true là đc.
  Vì true là bool, nên để trong {}. 
  
  Và vì có đk true/false nên phải có hàm xét riêng, xem trong product.js.
  Tương tự có hàm format giá tiền, xem trong product.js

*/


class App extends Component {
  /*VIDEO 11: 
    Trong folder Pruduct thầy cho có file data.json là mảng json, chứa nhiều object gồm name, price, images, hot.
    Vậy nên ta nhúng json đó vào đây.
    +css để tạo state, đặt key name là products
    +copy [tất cả json nằm trong dấu ngoặc vuông] vào sau products: (paste vào)

    +viết hàm show_product để hiển thị state products ra.
    */
  constructor(props) {
    super(props);
    
    this.state = { //products là 1 keyState, đặt tùy ý.
      products : [
        {
          name 	: "Laptop Asus",
          price 	: "10000000",
          images 	: "/images/products/p1.png",
          hot 	: true
        },
        {
          name 	: "Điện Thoại Asus",
          price 	: "40000000",
          images 	: "/images/products/p2.png",
          hot 	: false
        },
        {
          name 	: "Điện Thoại iPhone X",
          price 	: "55000000",
          images 	: "/images/products/p3.png",
          hot 	: true
        },
        {
          name 	: "Macbook",
          price 	: "55000000",
          images 	: "/images/products/p4.png",
          hot 	: true
        },
        {
          name 	: "Laptop HP",
          price 	: "96000000",
          images 	: "/images/products/p4.png",
          hot 	: false
        },
        {
          name 	: "Laptop Lenovo",
          price 	: "26000000",
          images 	: "/images/products/p3.png",
          hot 	: true
        }
      ]
    };
  }

  //VIDEO 11:
  //search reactjs map vào https://reactjs.org/docs/lists-and-keys.html để lấy cấu trúc của map: Duyệt mảng.
  //Duyệt từng object của mảng, mỗi lần lặp sẽ tạo ra 1 product với các giá trị lấy từ item của state products.
  //item là giá trị từng object đc duyệt. 
  show_product = () => {
    const listProduct = this.state.products.map((item, index) =>
      //thêm edit và delelte vào 
      //price: là tên mình đặt tùy ý, bên Product.js sẽ gọi vào theo tên mình đặt bằng props. vào cấu trúc của Product.js.
      //index là key để phân biệt giữa component này với component khác nhưng ko gọi đc key. 
      //Nên để phục vụ việc thêm xóa sửa các component, thì index={index} để gán id thành index mới gọi đc.
      <Product key={index} index={index}  price={item.price} edit={ (id, name) => { this.editNameProduct(id, name) } } delete={ (id) => { this.deleteProduct(id) } } images={item.images} hot={item.hot}>{item.name}</Product>      

      /*edit={ (id, name) : 
        Vì id, name là các tham số chưa biết, nên cần phải truyền vào.        
        Vậy thì id, name ở đây là các tham số truyền vào, cũng giống như kiểu sau:

        hamnaodo = (id, name) => {
            this.editNameProduct(id, name)
        }
        */
    );
    return listProduct;
  }

  //VIDEO 12:
  //dùng cho remove component product nào đó
  deleteProduct = (id) => {
    console.log("Xóa sản phẩm có ID: " + id);

    //tạo mảng chứa các products đang có. Nói đúng hơn là chứa state products.
    var arrayProduct = this.state.products;
    arrayProduct.splice(id, 1); //từ vị trí bắt đầu là id, xóa 1 phần tử

    //sau khi xóa xong, gán ngược lại array vào state products để cập nhật sau khi xóa.    
    //sst để setState
    this.setState({products : arrayProduct}); 

  }

  //dùng khi edit
  editNameProduct = (id, name) => {
    console.log("Cập nhật sản phẩm có id: " + id + " thành tên: " + name);

    //tạo mảng chứa state products    
    var arrayProduct = this.state.products; 
    
    //Edit tại vị trí id
    arrayProduct[id].name = name;

    //sau khi xóa xong, gán ngược lại array vào state products để cập nhật.    
    //sst để setState
    this.setState({products : arrayProduct}); 
  }




  render() {
    return (
      <div className="App">
      

        <div className="container">

          {/*Đưa dl vào từ json, thay vì ghi từng phần như bên dưới.*/}
          { this.show_product() }
          
          {/*
            <Product price="1000000" images="/images/products/p1.png" hot={true}>Laptop Asus</Product>
            <Product price="3000000" images="/images/products/p3.png" hot={false}>iPone X</Product>
            <Product price="6000000" images="/images/products/p2.png" hot={true}>Laptop Lenovo</Product>
          */}
          
          <Modal />          
        </div>
      </div>
    );
  }
}

export default App;
