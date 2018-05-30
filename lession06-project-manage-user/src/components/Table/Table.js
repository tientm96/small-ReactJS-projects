//rcc 
import React, { Component } from 'react';
import TableRow from './TableRow';


class Table extends Component {

    //hàm showButton. Nếu bấm btnthêm xong thì sẽ hiện ra btnđóng. Bấm btnđóng xong thì sẽ hiện ra btnthêm.
    //Vì thêm là hiện ra form để thêm, đóng là đóng form đó. Nên mới start lên thì là btnThem.
    
    
    //Tại App.js có state statusForm:false, state đó truyền qua Table.js bằng khia báo props status trong thẻ <Table>.
    //  Vậy ở đây dùng props để gọi ra props status đó ở App.js, hiện tạ nó đang mang giá trị false nên ta ! . 
    showButton = () => {
      if(!this.props.statusForm){ //status=false thì hiện btnThem
              //cả 2 đều gửi event qua, mỗi lần nhận đc event thì nó lại chuyển thành đóng mở luân phiên.
        return <a className="btn btn-success btn-sm" href="them" role="button" onClick={ (event) => this.props.formToogle(event) }><i className="fa fa-plus" aria-hidden="true" /> Thêm</a>
      }else{//status=true thì hiện btnđóng
        return <a className="btn btn-danger btn-sm" href="dong" role="button" onClick={ (event) => this.props.formToogle(event) }><i className="fa fa-close" aria-hidden="true" /> Đóng</a>
      }
    }


    //Khi Form ẩn đi thì điều chỉnh bảng table dài ra.
    classTable = () => {
      if(!this.props.statusForm){ //status=false thì hiện btnThem. Lúc này form ko hiện, phóng to table, nên 12 cột, rộng hết cỡ.
        return "col-xs-12 col-sm-12 col-md-12 col-lg-12" 
      }else{
        return "col-xs-8 col-sm-8 col-md-8 col-lg-8"  //lúc form mở lên thì thu lại về 8 cột thôi.
      }
    }


    //Nhập dl data từ App.js, bây giờ đổ ra để nó hiện ra trong table.
    //Mà this.props.usersData có userData là 1 mảng, nên dùng map
    mappingData = () => {
      const tableRow = this.props.usersData.map( (value, key) => {
        //username, level...: là các keyname trong data.json
        //Đưa các thuộc tính vào đây. Ở bên TableRow thì gọi đến children bằng props để hiện lên.
        //Riêng index={ key } là stt 0,1,2, vì key cũng tương ứng stt. Qua bên TableRow gọi ra thì + 1 vào cho đúng stt.
        return <TableRow key={ key } level={ value.level } index={ key }>{ value.username }</TableRow>
      });
      return tableRow;
    }    

    render() {
        return (
            /*chứa table*/
            // <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className={ this.classTable() }>
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Thành Viên</th>
                    <th>Quyền</th>
                    <th className="text-center" colSpan={2}>
                        { this.showButton() }
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {/*Vì danh sách tên sẽ lặp lại nhiều lần, vì nhiều tên đc đưa vào. Nên cắt ra làm 1 component riêng.
                    <TableRow></TableRow>
                    <TableRow></TableRow>
                    <TableRow></TableRow>                    
                    */}

                    { this.mappingData() }
                </tbody>
              </table>
            </div>
        );
    }
}

export default Table;