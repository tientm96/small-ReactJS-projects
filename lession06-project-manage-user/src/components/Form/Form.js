//rcc 
import React, { Component } from 'react';

//Tạo id bằng package uuid, đang dùng versio4(random)
const uuidv4 = require('uuid/v4');



class Form extends Component {

    //csc, tạo constructor và state.
    constructor(props) {
      super(props);
      //est
      this.state = {
        //các state đc viết trùng tên với các name đc thiết lập dưới form. Đê thuẩn lợi cho việc lấy dl.
        txtUser : '',
        txtPass : '',
        sltLevel : 1

      };
    }
    

    //Để lấy dl nhập vào ở form ra, thì dùng hàm changeInput() để cập nhật sự thay đổi của nó.
    // và gọi hàm này ở sự kiện onChange ở dưới cấu trúc các ô nhập vào trong form.
    //Đồng thời hàm này cũng set lại các state, nhờ vào ưu điểm đặt trùng tên state và các name.
    changeInput = (event) => {
      const target = event.target; //target một nhánh chứa giá trị nhập vào. Có name và value tương ứng. lúc nào cũng v.
      const name = target.name;
      const value = target.value;

      //gán giá trị của value vào name, mảng [name] với value tương ứng. Xem bài 5 giải thích rất rõ phần này.
      //sst
      this.setState({
        [name] : value  //các name sẽ được gán với value tương ứng, mà name thì trùng với các state, nên các state tự động cập nhật giá trị.
      });
    }


    //Khi bấm nút submit thêm, thì lấy dl từ form ra. 
    //Hàm này đc gọi dưới thẻ <form>, với sự kiện onSubmit.
    // khi đó btn <button type="submit"> bấm submit thì nó tự gọi đến event onSubmit đấy.
    submitForm = (event) => {
      //Tránh load lại trang
      event.preventDefault();
      //Để xóa dl trong các ô nhập vào sau khi đã bấm submit.
      event.target.reset();

      // alert("submitForm"); //message

      //có nghĩa là txtUser = this.state.txtUser, txtPass = this.state.txtPass. Lúc này chỉ cần gọi txtUser là nó
      //tự hiểu là gọi this.state.txtUser
      const {txtUser, txtPass, sltLevel} = this.state; 

      //ở hàm changeInput(), giá trị nhập vào đã đc set cho các state, nên ta in ra để ktra.
      let content = '';
      content += 'User : ' + txtUser;
      content += '--Pass : ' + txtPass;
      content += '--Level : ' + sltLevel;
      console.log(content);


      //Đẩy các giá trị mới nhập vào json.data, để nó load ra table. 
      //Tạo object để chứa các dl nhập vào, r đưa object vào json.

      //id, username, password, level là các keyname trong object của json, khi gán phải gọi đúng keyname đó.  
      const item = {};
      item.username = txtUser; //txtUser lúc này chính là this.state.txtUser đã làm gọn
      item.password = txtPass;
      item.level = parseInt(sltLevel, 10);  //chuyển Level thành số int luôn, để tránh lộn xộn. radix=10 dùng cho cú pháp của parseInt

      // item.id = 11; //chưa có id đc, cho đại 1 số.
      
      /*Cách tạo id tự động:
      - Dùng package có sẵn, ta search: "package uuid" vào https://www.npmjs.com/package/uuid
        +package này có sẵn các vesion, ta chỉ copy dòng cài đặt về cài vào: "npm install uuid --save"
        +thêm --save để nó lưu vào package.json. 
        +Có 2 cách cài: 1 là dùng Terminal của VS Code, 2 là mở folder chứa project, r gitbashhere rồi gán lệnh 
            trên vào.

      - Sau khi cài xong, trên trang đó nó có hướng dẫn cú pháp sử dụng các version ntn.

      - Ở đây ta chọn version4(random), copy dòng const uuidv4 = require('uuid/v4'); trên chổ import,
          rồi gọi nó bằng uuidv4() sẽ cho ra id random kiểu '416ac246-e7ac-f7e946b'

        */
       
       item.id=uuidv4();
       console.log(item);

       /*Add dữ liệu vừa nhập vào usersData. Vì dl add vào thông qua state usersData:myData lấy dl từ file data.json.
        Mà ta add usersData vào thẻ <Table></Table> trong lúc gọi thẻ <Table> tại App.js, nên lúc này qua App.js 
        mà add vào state usersData:myData.
        
      Chú ý: bên App.js, state usersData chính là data hiển thị lên, usersData ban đầu chỉ lấy gtri của
          data.json, nhưng nay đc add thêm giá trị là item => item add vào usersData để hiển thị lên, chứ ko add 
          vào file data.json.

          Như vậy vẫn chưa cập nhật xuống database chính là file data.json.
        */

        //Bên App.js đã tạo ra property add={ (item) => this.addAction(item) } trong thẻ <Form>, 
        //    và hiện tại đang cần nhận item truyền qua từ Form.js.

        //Tại Form.js: tại đây gọi props.add(item) và truyền tham số item qua. 
        //  Tham số item mang đầy đủ thông tin của các dòng trong các form mới nhập vào. 
        this.props.add(item);
        
    }



    render() {
        return (
            /*chứa form*/           
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="alert alert-danger" role="alert">
                <strong>Lỗi </strong> Vui lòng nhập
              </div>
              <div className="alert alert-success" role="alert">
                <strong>Thông báo </strong> Thành công
              </div>
              
              <div className="card">
                <div className="card-header">
                  Thêm
                  <button type="button" className="close" aria-label="Close" onClick={ (event) => this.props.formToogle(event) } >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                {/*From, khung nhập và btn submit. Thêm vào các name: name="txtUser", name="txtPass", name="sltLevel".
                    các name này phải trùng với state, để state có thể lấy đc giá trị.
                  + onChange={ (event) => this.changeInput(event) }: để gọi hàm cập lấy ra sự thay đổi của các ô nhập vào.
                  */}
                <div className="card-block">
                  <form method="POST" onSubmit={ (event) => this.submitForm(event) }>
                      <div className="form-group">
                        <label htmlFor="txtUser">Thành Viên</label>
                        <input type="text" name="txtUser" className="form-control" placeholder="Nhập Thành Viên" onChange={ (event) => this.changeInput(event) } />
                      </div>
                      <div className="form-group">
                        <label htmlFor="txtPass">Mật Khẩu</label>
                        <input type="password" name="txtPass" className="form-control" placeholder="Nhập Mật Khẩu" onChange={ (event) => this.changeInput(event) } />
                      </div>
                      <div className="form-group">
                        <label htmlFor="sltLevel">Quyền</label>

                        {/*Ở đây dùng sk onChange, nên chỉ lấy đc level khi có sự thay đổi.
                            Còn level đang hiển thị nếu ko kích vô chọn lại thì nó sẽ ko hiển thị.
                          Vậy nên phải set value cho nó mặc định, bằng cách set mặc định state sltLevel:'1'.
                            rồi sau đó, nếu thay đổi thì state sltLevel sẽ tự động cập nhật lại giá trị.
                          
                          Thẻ <select chính là combobox. >*/}
                        <select className="form-control" value={ this.state.sltLevel } name="sltLevel" onChange={ (event) => this.changeInput(event) } >
                          <option value={1}>Quản Trị Viên</option>
                          <option value={2}>Thành Viên</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary">Thêm</button>
                  </form>
                </div>
              </div>
            </div>
        );
    }
}

export default Form;