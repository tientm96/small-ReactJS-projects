//rcc 
import React, { Component } from 'react';

/*compont chứa liên hệ.
Vào file lienhe.html của thầy, cắt div trong container. Nhớ chuyển sang JSX*/

/*Hiện câu hỏi xác nhận trước khi chuyển qua mục khác.
Mở trang https://reacttraining.com/react-router/web/guides/philosophy
kích vào mục "Preventing Transitions"*/

//Vì đang làm vấn đề nhập địa chỉ trong liên hệ, nên làm trong file Contact.
import { Prompt, Redirect } from "react-router-dom";


/*VIDEO25: Kích vào submit sẽ chuyển đến một trang nào đó, mà ko bị load lại. 
Dùng "Redirects (Auth)" vào link: https://reacttraining.com/react-router/web/example/auth-workflow
+Trước tiên import thêm Redirect*/


//tạo mảng
const subject = [
    "PHP",
    "ASP",
    "Swift",
    "Android"
];


class Contact extends Component {
    

    //css tạo constructor
    constructor(props) {
        super(props);
        //est
        this.state = {
            isBlocking : false,
            isRedirect : false,

            //khai báo thêm 4 state, dùng để chứa dl từ những cái nhập vào.
            txtName : '',
            txtMail : '',
            txtPhone : '',
            txtMessage : '',
            
            //Để giá trị mặc định là hcm, khi chọn dn, hn thì nó lại set lại value, nên ko sợ ko chọn đc khi đã default.
            //[name] : value ở dưới setState sẽ set lại value mỗi khi chọn giá trị khác, khi đó state sẽ bị đổi gt,
            //bên dưới chổ set value hiển thì sẽ đổi theo state tương ứng lúc đó.
            sltCity : 'hcm',
            rdoGioiTinh : 1,
            chkSubject : new Set(),  //có giá trị là 1 mảng Set.
            file : ''
        };
    }


    //Hàm hiển thị các checkBox. Th vì viết từng đoạn checkbox giống nhau bên dưới. Thì mình tạo 1 mảng các giá trị,
    //rồi duyệt giá trị của mảng với cấu trúc check box là 1 dòng nào đó bên dưới.
    //Thay thế nhiều dòng tạo checkbox, bằng 1 hàm này là đc.
    checkboxSubject = () => {
        const monhoc = subject.map((value, key) => {
            //checked={ this.state.chkSubject.has(value): để ktra gtri đã check. Nếu có check r thì giữ lại, ko xóa đi sau mỗi lần bấm submit.
            //      chkSubject.has: has chính là thuộc tính của mảng Set(), chứ ko phải state.
            return <label className="checkbox-inline" key={key}><input name="chkSubject" type="checkbox" value={ value } onChange={ () => this.checkedSubject(value) } checked={ this.state.chkSubject.has(value) } /> { value } </label>
        });

        return monhoc;
    }

    
    //Mỗi khi check xong, lưu giá trị đã check vào mảng set. 
    //Đầu tiên, vừa start lên thì có 1 cái mảng set xuất hiện, nên sẽ khởi tạo mảng Set trong componentWillMount.
    //Mảng Set này dùng để lưu các giá trị đã đc check.
    //cwm
    componentWillMount() {
        this.checkedCheckbox = new Set();  //vì ở đây chỉ cục bộ, nên tạo luôn trên state, với cùng 1 kiểu.
    }

    //khi check vào thì sẽ gọi hàm này ra. Gọi hàm này tại thẻ <label> ở trên.
    checkedSubject = (monhoc) => {
        // alert(monhoc); //hiện lên message
        //mảng Set với các thuộc tính has, de, add, duyệt theo value.
        if(this.checkedCheckbox.has(monhoc)){ //nếu đã check rồi, mà h check lại nghĩa là bỏ check, thì xóa đi
            this.checkedCheckbox.delete(monhoc);
        }else{ //nếu chưa check thì lúc này check sẽ truyền vào (truyền giá trị vừa check vào)
            this.checkedCheckbox.add(monhoc);
        }
        //Mảng set có các thuộc tính has, add, delete...

        //sst
        this.setState({
             chkSubject : this.checkedCheckbox
        });

        console.log(this.state.chkSubject);
    }

    


    isInputChange = (event) => {
        //Lấy dữ liệu vừa nhập vào ở lien-he, gán vào các state dùng để chứa như txtName, txtMail
        /*Vào https://reactjs.org/docs/forms.html , kéo xuống "Handling Multiple Inputs".
        */
        const target = event.target;

        
        const name = target.name; //để lấy name của input ra.
        const value = target.value; //để lấy giá trị của input ra.
        /*
        //Name của input chính là <input type="text" name="txtName"... > 
        //hoặc <input type="text" name="txtMail" ...>... (xem khai báo code ở dưới), mục đích là
        //để set Name cho từng  mục nhập vào. Để ở đây const name này nó có thể phân biệt từng cái. 

        //Khi const name gọi ra, là gọi đến các name đc set bên dưới, 
        //thì const name lúc này sẽ là "txtName, txtMail, txtPhone, txtMessage", trùng tên với các state.
        //Cố tình đặt trùng, để khi gọi ra sẽ trùng tên với các state, sẽ gán các giá trị nhập vào của
        //name đó cho từng state tương ứng.
        //Xem lệnh gán setstate "[name] : value", lệnh này sẽ gán value với từng state 
        //  trùng tên với name đc gọi ra. 

        //Lúc này các state txtName, txtMail,... đã có giá trị. Ta có thể gọi console để in ra chúng
        //  như các lệnh bên dưới. vd: console.log(this.state.txtMail) 
        */

        //console.log(event.target.value.length > 0); 
        //nếu event có dl thì isBlocking đổi thành true      
        //sst
        this.setState({
            isBlocking : target.value.length > 0,            

            //thay vì: "txtName : event.target.value"
            //thay vì  "txtMail : event.target.value" thì
            [name] : value                       
            //nghĩa là gán từng giá trị state theo giá trị tương ứng, chứ ko gọi từng state để gán.
        });

    }



    //Hàm lấy file
    isFileChange = (event) => {
        // console.log(event.target.files[0].name); 

        //sst
        this.setState({
            file : event.target.files[0].name
        });
    }
    
    

    /*Tránh TH bấm btn submit sẽ load lại trang. Mất đi tính single page của router. 
    Cũng trong phần https://reacttraining.com/react-router/web/example/preventing-transitions
    */  
    submitForm = (event) => {
        event.preventDefault();  //chặn việc reload lại trang.
        // event.target.reset();   //xóa toàn bộ form đi
        
        this.setState({      //sau khi xóa xong sẽ cho form trở lại bt, isBlocking=false nghĩa là hiện tại
            isBlocking: false,  //vẫn chưa có dl. Có thể di chuyển qua Menu mà ko cần hỏi.
            
            // isRedirect: true // khi kích vào submit thì isRedirect=true. Lúc này mới chuyển đến trang-chu
            isRedirect: false
        });


        //Chú ý để làm gọn this.state.txtName... thì như sau:
        // const {txtName} = this.state; // tương ứng với: txtName = this.state.txtName. 
        //  Lúc này ở dưới ko cần gọi this.state.txtName, mà chỉ cần txtName là đủ.
        //Còn muốn dùng nhiều thì điều vào {đây} nhiều như  dòng sau đây:
        const {txtName, txtMail, txtPhone, txtMessage, sltCity, file, chkSubject, rdoGioiTinh} = this.state;


        /*khi bấm submit thì in ra các thông tin nhập vào*/
        var gioitinh = '';
        if(parseInt(rdoGioiTinh, 10) === 1){   //rdoGioiTinh thay vì this.state.rdoGioiTinh, vì đã làm gọn state trong const ở trên.
            gioitinh = 'Nam';
        }else{
            gioitinh = 'Nữ';
        }

        var monhoc = '';
        for(const mh of chkSubject){     ////chkSubject thay vì this.state.chkSubject, vì đã làm gọn state trong const ở trên.
            monhoc += mh + ", ";
        }


        var content = '';
        content += 'Họ tên: ' + txtName;
        content += '--Email: ' + txtMail;
        content += '--Phone: ' + txtPhone;
        content += '--Message: ' + txtMessage;
        content += '--City: ' + sltCity;
        content += '--Sex: ' + gioitinh ;
        content += '--Subject: ' + monhoc ;
        content += '--File: ' + file ;

        console.log(content);
    }  



    render() {
        /*Kích vào submit sẽ chuyển đến trang chủ, mà ko bị load lại. Xem link ở import.
        Nó hướng dẫn dùng đoạn code này, tại vị trí này. Ta custom lại code.*/

        //chú ý: chỉ chuyển khi nhấn submit. Nên ở hàm submitForm(), khi nhấn submit thì isRedirect=true.
        //Lúc này if mới = true, mới chuyển đến trang chủ.
       if (this.state.isRedirect) { //nếu = true

            return <Redirect to="/trang-chu" />;  //ở RouterURL sẽ nhận đc tên link sai, tự về Home.
                                                //Ghi trang-chu cho rõ, chứ đúng phải là "/"
       }



        return (
            <div>
                {/*Gọi đến promt, copy cú pháp về. Có 2 thuộc tính là When và message.
                Hàm này mặc định sẽ hỏi nếu như isBlocking=true.
                Đã import thư viện ở trên.*/}
                <Prompt when={ this.state.isBlocking } message={ location => `Are you sure you want to go to ${location.pathname}` } />




                <div className="well well-sm">
                    <h3><strong>Liên Hệ</strong></h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.394558614363!2d106.67738851480082!3d10.781062492318384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f28f4044ddd%3A0x48b88917406c3156!2zUXXhu5FjIFR14bqlbiAtIMSQw6BvIFThuqFvIEzhuq1wIFRyw6xuaA!5e0!3m2!1svi!2s!4v1457887522959" width="100%" height={315} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                    </div>
                    <div className="col-md-5">
                        <h4><strong>Get in Touch</strong></h4>
                         
                        {/*Tránh TH bấm btn submit sẽ load lại trang. Mất đi tính single page của router. 
                        Gọi đến hàm submitForm ở trên.*/}
                        <form onSubmit={ (e) => this.submitForm(e) }>
                         
                            <div className="form-group">
                             
                                {/*Kiểm tra Name có dl nhập vào ko. Gọi hàm onChange ở trên để ktra.     //event tham số vào của hàm. //event lấy từ event trong () . 
                                -Nếu trong Name có dl, thì hàm isInputChange sẽ set state isBlocking là true.
                                -Khi isBlocking=true thì Prompt mặc định sẽ xuất hiện câu hỏi trước khi chuyển sang menu khác. 
                                 
                                -Đã cài đặt Prompt ở dòng trên. Import thư viện.*/}
                                <input type="text" name="txtName" value={ this.state.txtName } className="form-control" placeholder="Name" onChange={ (event) => this.isInputChange(event) } />
                            </div>

                            <div className="form-group">
                                {/*Cài đặt name="txtName", name="txtMail", name="txtPhone". 
                                
                                */}
                                <input type="email" name="txtMail" value={ this.state.txtMail } className="form-control" placeholder="E-mail" onChange={ (event) => this.isInputChange(event) } />
                            </div>
                            <div className="form-group">
                                <input type="tel" name="txtPhone" value={ this.state.txtPhone } className="form-control" placeholder="Phone" onChange={ (event) => this.isInputChange(event) } />
                            </div>
                            <div className="form-group">
                                {/*Với textarea thì giá trị sẽ là defaultValue, chứ ko dùng value.*/}
                                <textarea name="txtMessage" defaultValue={ this.state.txtMessage } className="form-control" rows={3} placeholder="Message" onChange={ (event) => this.isInputChange(event) } />
                            </div>

                                
                            {/*vào folder router thầy gửi, r vào screenshot. Mở file jsx.js sẽ có các dl về 
                                selete box, input checkbox, radio, file. 
                            +Dùng onChange để lấy dl ra.
                            +value={ this.state.sltCity } sẽ ra mặc định là value của sltCity  
                            +checked={ parseInt(this.state.rdoGioiTinh, 10) === 1 }: state lúc này là chuỗi, ===1
                                là bằng đồng nhất, = luôn cả kdl, nên phải ép kiểu về. parseInt(string, radix) nên 10
                                là cơ số 10.
                             */}
                            <div className="form-group">
                                <select name="sltCity" className="form-control" value={ this.state.sltCity } onChange={ (event) => this.isInputChange(event) } >
                                    <option value="">Vui lòng chọn thành phố</option>
                                    <option value="hn">Hà Nội</option>
                                    <option value="dn">Đà Nẵng</option>
                                    <option value="hcm">Hồ Chí Minh</option>
                                </select>
                            </div>
                            <div className="form-group">
                                {/*<label className="checkbox-inline"><input name="chkSubject" type="checkbox" value="php" /> PHP </label>
                                <label className="checkbox-inline"><input name="chkSubject" type="checkbox" value="android" /> Android </label>
                                <label className="checkbox-inline"><input name="chkSubject" type="checkbox" value="ios" /> iOS - Swift </label>
                                <label className="checkbox-inline"><input name="chkSubject" type="checkbox" value="asp" /> ASP </label> */}
                                { this.checkboxSubject() }
                            </div>
                            <div className="form-group">
                                <label className="radio-inline"><input type="radio" name="rdoGioiTinh" value="1" onChange={ (event) => this.isInputChange(event) } checked={ parseInt(this.state.rdoGioiTinh, 10) === 1 } />Nam</label>
                                <label className="radio-inline"><input type="radio" name="rdoGioiTinh" value="2" onChange={ (event) => this.isInputChange(event) } checked={ parseInt(this.state.rdoGioiTinh, 10) === 2 } />Nữ</label>
                            </div>
                            <div className="form-group">
                                <label className="custom-file">
                                    {/*Ở đây là choose file từ local, nên sửa onChange lại là dùng hàm isFileChange, hàm isFileChange viết ở trên. */}
                                    <input type="file" id="file" className="custom-file-input" name="fAvatar" onChange={ (event) => this.isFileChange(event) } />
                                    <span className="custom-file-control"></span>
                                </label>
                            </div>



                            

                            <button className="btn btn-default" type="submit" name="button">
                                <i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;