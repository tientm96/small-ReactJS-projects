//rcc 
import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            //index là key, tương ứng stt từ 0, nên muốn stt từ 1 thì + thêm 1.
            //STT là key, nên sẽ tự tăng, chỉ cần đưa vào index+1, ko cần quan tâm nhiều.
            <tr>
                <td>{ this.props.index + 1}</td> 
                <td>{ this.props.children }</td>
                <td>{ (this.props.level === 1) ? "Admin" : "Member" }</td>
                <td className="text-center" width="50px"><a className="btn btn-warning btn-sm" href="sua" role="button"><i className="fa fa-pencil-square-o" aria-hidden="true" /> Sửa</a></td>
                <td className="text-center" width="50px"><a className="btn btn-danger btn-sm" href="xoa" role="button"><i className="fa fa-trash-o" aria-hidden="true" /> Xóa</a></td>
            </tr>
        );
    }
}

export default TableRow;


