import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Table from '../Table/Table';
import Form from '../Form/Form';


/*Copy file data.json thầy cho vào src. File đó cung cấp thông tin từng item cho table.
  vì App.js là file chính, nên import data.js vào đây luôn. 
  - Gán myData vào 1 cái state
  - chuyển state đó vô phần <Table> để trở thành 1 props, lúc đó bên Table.js có thể gọi qua bằng props,
      rồi đổ dl ra.*/
import myData from '../../data.json';


/*
-Trong folder manage thầy cho, copy thư mục template bỏ vào mục public của project.
-Copy body trong file index.html thầy cho, chuyển sang JSX r đưa vào đây.
  Lần lượt chuyển code từng mục sang folder tương ứng, rồi gọi ở đây. Nav, Table, Form
*/


class App extends Component {

  //Vì <Form>(các ô để nhập thêm vào) hiện lên khi bấm btnThem. 
  //Nhưng toàn bộ form này đc gọi trong App.js. Nên mọi cấu hình để ẩn hiện form này đều sẽ cấu hình trong App.js
  
  //css
  constructor(props) {
    super(props);
    //est
    this.state = {
      statusForm : false,  //ban đầu chưa bấm btnThem thì chưa cần hiện lên.
      usersData : myData
    };
  }
  

  /*Tương tự, khi nhấn dấu x form thêm, nó nó sẽ tắt thêm. Ta đưa onClick={ (event) => this.props.formToogle(event)
      vào vị trí dấu x trong Form.js. Và ở App.js ta đưa vào showForm formToogle={ (event) => this.changeStatusForm(event) },
      mục đích là để nhận event từ Form.js truyền qua, nó sẽ tắt mở luân phiên form giống như btnThem*/
  //hàm showForm
  showForm = () => {
    if(this.state.statusForm){ // status=true thì mới hiện form lên.

      /*thêm add={ (item) => this.addAction(item) } để tạo 1 property, để nhận dữ liệu truyền qua từ Form.js
      //Bên Form.js, dùng props để gọi property và truyền tham số item từ đó qua đây.
      //App.js nhận đc item truyền qua, gọi đến hàm addAction(), hàm này sẽ đẩy item vào state usersData, và set
      //lại cho chính nó, để cập nhật usersData (chính là data hiển thị lên, usersData ban đầu chỉ lấy gtri của
      //  data.json, nhưng nay đc add thêm giá trị là item => item add vào usersData để hiển thị, chứ ko add vào 
      //  file data.json).

      //Như vậy vẫn chưa cập nhật xuống database chính là file data.json. */
     
      return <Form formToogle={ (event) => this.changeStatusForm(event) } add={ (item) => this.addAction(item) }></Form>
    }
  }

  /*Sự Giao Tiếp Giữa Các Component: Comiunity Component.
  - Nhấm btnThem thì form thêm thông tin hiện ra.
  - Nhưng btnThem ở Table.js, còn Form hiện ra thì ở App.js (tại đây).
  - Vậy phải sử dụng giao tiếp giữa các component:
    + Sử dụng props để truyền dl.
    
    + Tại hàm showButton của Table.js, thêm event click: onClick={ this.props.formToogle(event) } truyền vào event,
       click vào thì nó gọi tới
          formToogle trong thẻ <Table> ở mọi nơi, mà ở đây App.js đang mở thẻ <Table>. 
          formToogle sẽ gọi đến hàm changeStatus(), làm thay đổi giá trị state statusForm.  */

    //tạo hàm thay đổi trạng thái - changeStatusForm.
    //Sau đó truyền trạng thái hàm đó vào thẻ mở <Table> bên dưới.
    changeStatusForm = (event) => {

      //để tránh việc load lại trang
      event.preventDefault(); //như vậy phải truyền event từ Table.js qua tới formToogle rồi truyền lên đây.

      // alert("change status"); //hiện message

      this.setState({
        // statusForm : true //là cách bt

        //còn nếu muốn bấm thêm lần 1 thì hiện form, bấm thêm lần nữa thì tắt form, 
        //thì ta gán giá trị state bằng phủ định của nó. Như vậy sẽ thay đổi liên tục khi tâm bấm thêm.
        statusForm : !this.state.statusForm 

      });
    }

    
       /*Add dữ liệu vừa nhập vào usersData. Vì dl add vào thông qua state usersData:myData lấy dl từ file data.json.
        Mà ta add usersData vào thẻ <Table></Table> trong lúc gọi thẻ <Table> tại App.js, nên lúc này qua App.js 
        mà add vào state usersData:myData.
        
      Chú ý: bên App.js, state usersData chính là data hiển thị lên, usersData ban đầu chỉ lấy gtri của
          data.json, nhưng nay đc add thêm giá trị là item => item add vào usersData để hiển thị lên, chứ ko add 
          vào file data.json.

          Như vậy vẫn chưa cập nhật xuống database chính là file data.json.
          
        */

    addAction = (item) => {
      //vì data.json đang chứa ở dạng mảng, mảng chứa các object. Nên sử dụng push.
      this.state.usersData.push(item);

      //push dl vào state usersData rồi, h thì gán lại state đó cho chính nó, bằng cách set lại.
      //sst
      this.setState({
        usersData : this.state.usersData
      });
    }


  render() {
    return (
      <div className="App">
        <div className="container">
          
          <Nav></Nav>

          <div className="row">
            {/*-Dữ liệu đc đổ vào tại vị trí này, App.js.
            -Truyền statusForm sang Table.js dưới dạng một props.*/}
            <Table usersData={ this.state.usersData } statusForm={ this.state.statusForm } formToogle={ (event) => this.changeStatusForm(event) }></Table>
            { this.showForm() }
          </div>
        </div>
    
      </div>
    );
  }
}

export default App;
