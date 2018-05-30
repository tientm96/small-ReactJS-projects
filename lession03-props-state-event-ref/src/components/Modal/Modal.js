//rcc để tạo component
import React, { Component } from 'react';

//copy đoạn code Modal của index.html thầy cho vào. Nhớ chuyển sang JSX
//Rồi gọi Modal này tại App.js

//Mục đích của Modal là để bấm vào 2 button sẽ ra message.

class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                        <div className="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Modal;