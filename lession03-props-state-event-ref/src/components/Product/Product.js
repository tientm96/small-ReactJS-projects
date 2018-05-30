//rcc để tạo cấu trúc component
import React, { Component } from 'react';

class Product extends Component {

    //tạo 1 constuctor state để giải quyết btn edit, btn save
    //css chọn cái thứ 2
    constructor(props) {
        super(props);
        this.state = {
            editing : false  //editing là key name, đặt tùy ý. 
        };
    }
    



    //funtion kiểm tra nếu hot=true thì mới hiện lên HOT. Cắt đoạn JSX HOT lên trong hàm. 
    //this.show_featured(this.props.hot): Ở dưới chổ vừa bị cắt thế vào là gọi hàm này.

    show_featured = (featured) =>{
        if(featured === true){
            return <span className="tag2 hot">HOT</span>;   
        }
    }

    //Hàm định dạng giá tiền
    //search: javascript format giá tiền, rồi vào trang http://laptrinhphp.info/JavaScript/javascript-dinh-dang-tien-phan-cach-phan-ngan.html
    //Copy hàm về rồi chỉnh sửa thành ES6.

    //Viết xong hàm xuống dưới cấu trúc gọi hàm và truyền thuộc tính giá vào:
    //{ this.format_curency(this.props.price) }
    format_curency = (price) => {
        return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }


    /*VIDEO 8: EVENT
    Vào https://reactjs.org/docs/handling-events.html để xem cấu trúc của event.  
    
    //Cách 1: Hàm event khi nhấn vào More Info, cách này không có tham số truyền vào.
    //Gọi dưới: onClick={ this.show_infoC1 }, gọi bt mà ko có tham số, riêng với event thì ko có ().
    //hoặc gọi  onClick={ () => this.show_infoC1() } , ko tham số nhưng vẫn có () 
    //hoặc gọi  onClick={ this.show_infoC1.bind(this) }   |với cấu trúc bin(this, tham số truyền vào)
    */
    show_infoC1 = () => {
        alert('Hello Tiến đẹp trai'); //hiện lên message
    }


    //Cách 2: Có tham số truyền vào.
    //Gọi:  onClick={ () => this.show_info(this.props.children) }
    //hoặc: onClick={ this.show_info.bind(this, this.props.children) } 
    //      với cấu trúc bin(this là giao diện product này, this.props.children là tham số truyền vào)
    //Những hàm nằm trong component đều phải dùng this.hàm để gọi
    show_info = (mgs) => {
        alert(mgs); 
    }


    /*Trong folder product thầy gửi, có button.txt gồm 2 đoạn code, đoạn thứ nhất là btn edit và remove.
    Đoạn thứ 2 là ô nhập text để edit, và btn save. 
    Cơ chế: Khi nhấn vào btn edit, thì btn edit và remove mất đi, hiện ra txt edit và btn save để sửa và lưu, 
        lưu xong thì quay lại btn edit và btn remove.
    Như vậy phải có 2 hàm cho 2 đoạn, và dùng state để điều khiển, và 1 hàm show để kết nối với state.
    +Tạo constuctor state ở trên cùng.
    +Viết hàm show_button()
    +Gọi hàm show_button() vào trong render() chính ở dưới. Hay nói khác là đưa vào component.
    +Viết 2 hàm sự kiện buttonEdit(), buttonSave() để xử lý. Nếu kích edit thì Editting = true,
        khi đó show_button() sẽ hiện renderForm(). 
        Nếu kích Save thì editing=false, khi đó show_button() sẽ hiện renderNormal().    
    */

    renderNormal = () => {
        return  <div className="col-md-12 product-info smart-form" style={{ marginTop : 10 }}> 
                    <div className="form-group">
                        {/* Viết thêm event cho edit ở đây và save ở dưới. */}            
                        <button className="btn btn-info" onClick={ () => this.buttonEdit() }>Edit</button>
                        <button className="btn btn-danger" onClick={ () => this.buttonDelete() }>Remove</button>
                    </div>
                </div>                
    }
    renderForm = () => {
        return  <div className="col-md-12 product-info smart-form" style={{ marginTop : 10 }}>
                    <div className="form-group">
                        {/*Thêm defaultValue={ this.props.children} vào để có giá trị mặc định cho ô txt.
                            Nếu ko biết cú pháp thì search: "default value reactjs"*/} 
                            
                        {/*Dùng ref để lấy xử lý dl nhập vào ô txt khi edit. dl ghi vào là (input) và gán cho txtName.*/}
                        <input ref={ (input) => { this.txtName = input } } defaultValue={ this.props.children} type="text" className="form-control" id="usr" /> 
                    </div>
                    <div className="form-group">
                        <button className="btn btn-info" onClick={ () => this.buttonSave() }>Save</button>
                    </div>
                </div>
    }
    show_button = () => {
        if(this.state.editing === false){
            return this.renderNormal();
        }else{
            return this.renderForm();
        }
    }

    buttonEdit = () => {
        //sst để setState
        this.setState({ editing:true }); //khi set giá trị của 1 key nào đó thì phải có {} bọc ngoài
    }

    buttonSave = () => {
        this.setState({ editing:false });

        // ở bên App.js thì edit={ (id, name) => { this.editNameProduct(id, name) } }
        //edit chính là sửa tên, nên gọi props này để sửa trước khi lưu
        this.props.edit(this.props.index, this.txtName.value); //chính là id và name truyền vào cho edit


        //txtName lúc này chính là name mới đc nhập vào để edit.
        //log dl ra để test thử, xem kq ở console
        console.log(this.txtName.value);
    }

    buttonDelete = () => {
        this.props.delete(this.props.index); //chính là id truyền vào cho delete
    }



    /*VIDEO 10: REF
    Dữ liệu nhập vào.
    Ở đây khi btnEdit, thì hiện ô txt nhập dl vào, dùng ref để xử lý dl đó. 
    +Thêm ref ở renderForm(). Dữ liệu ghi vào là (input) và đó cho txtName. 
    +Xuất dl ra tại buttonSave(), ở đây chỉ xuất log trên console để test thử.

    */


    render() {
        // F12 coi code, tìm vị trí code component, lấy 1 component html chuyển sang JSX rồi copy vào Product.js
        // Qua App.js gọi component Product đó vào. Vì App.js mặc định luôn là nơi chứa component.        
        // ++Thêm alt="" ở dòng 16, vì  console cảnh báo cần thêm.

        return (
            <div className="col-xs-12 col-md-6">
                {/* First product box start here*/}
                <div className="prod-info-main prod-wrap clearfix">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div className="product-image"> 
                                <img src={ this.props.images } alt="" className="img-responsive" /> 
                                { this.show_featured(this.props.hot) }
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <div className="product-deatil">
                                <h5 className="name">
                                    <a href="">
                                        { this.props.children }
                                    </a>
                                    <a href="">
                                        <span>Product Category</span>
                                    </a>                            
                                </h5>
                                <p className="price-container">
                                    <span>{ this.format_curency(this.props.price) } VND</span>
                                </p>
                                <span className="tag1" /> 
                            </div>
                            <div className="description">
                                <p>A Short product description here </p>
                            </div>
                            <div className="product-info smart-form">
                                <div className="row">
                                    <div className="col-md-12"> 
                                        <a data-toggle="modal" data-target="#myModal" className="btn btn-danger">Add to cart</a>
                                        <a onClick={ this.show_info.bind(this, this.props.children) } className="btn btn-info">More info</a>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="rating">Rating:
                                            <label htmlFor="stars-rating-5"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-4"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-3"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-2"><i className="fa fa-star text-warning" /></label>
                                            <label htmlFor="stars-rating-1"><i className="fa fa-star text-warning" /></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Đưa thêm btn Edit, Remove, Save và txtEdit vào component này*/}
                        {this.show_button()} 
                        
                    </div>
                </div>
                {/* end product */}
            </div>
          
        );
    }
}

export default Product;