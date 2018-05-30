//rcc để tạo component
import React, { Component } from 'react';

//tạo ra component mới, phục vụ cho việc kiểm tra vòng đời updating props

class Content extends Component {
    //cwr
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps: " + nextProps.name);
    }
    
    //hàm này nếu return về true thì mới xuống WillUp, rồi render, rồi DidUp.
    //Còn nếu return false thì tới shouldComponentUpdate là dừng.
    //scu
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: " + nextProps.name);      
        return true;  
    }
    //cwup
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate: " + nextProps.name);        
    }

    //render đã có, chỉ chạy lại, ko tạo lại.

    //cdup
    //ra kq: "componentDidUpdate: Tiến Init" : ý là đã update xong từ props name="Tiến Init".
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate: " + prevProps.name);               
    }
    

    
    
    

    render() {
        console.log("render Content.js: " + this.props.name);      

        return (
            <div>
                  <div>{ this.props.name }</div>             
            </div>
        );
    }
}

export default Content;