import React, { Component } from 'react';
import Content from './Content';
// import logo from './logo.svg';
// import './App.css';

/*Học về vòng đời của component
*/

class App extends Component {

  //csc để tạo contructor
  constructor(props) {
    super(props);
    console.log("Init");
    
    //est
    this.state = {
      component: "State Component Init",
      fullname: "Tiến Init"
    };
  }
  
  //cwm 
  componentWillMount() {
    console.log("componentWillMount");

    //sst
    this.setState({
      component : "State ComponentWillMount"
    });
  }

  //cdm
  componentDidMount() {
    console.log("componentDidMount");    
  }


  //test updating

  //tạo hàm updateState, tự đặt tên, chứ ko phải thuộc Life Cycle
  updateState = () => {
    this.setState({ //sst
      component : "New State component",
      fullname : "Tèo"
    });
  }


  unmounting = () => {
    
  }


  //scu
  //hàm này nếu return về true thì mới xuống WillUp, rồi render, rồi DidUp.
  //Còn nếu return false thì tới shouldComponentUpdate là dừng.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate: " + nextState.component);
    return true;
  }
  
  //cwup
  componentWillUpdate(nextProps, nextState) {
    console.log("ComponentWillUpdate: " + nextState.component);    
  }
  
  //render() đã có, chỉ chạy lại thôi

  //cdu
  //ra kq: "ComponentDidUpdate: State ComponentWillMount" : ý là đã update xong từ State ComponentWillMount.
  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate: " + prevState.component);        
  }
  

  //test unmounting: xóa gắn kết của component, hay là remove component.
  //Muốn xóa component thì phải xóa bên nhánh cha, nên phải xóa ở index.js, xóa ở App.js ko đc.

  //cwu
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  


  //-----------------------------------------------------------------------------------------
  render() {
    console.log("render");
    console.log(this.state.component);

    return (
      <div className="App">
        <div id="content">
          <Content name={ this.state.fullname }></Content>                  
        </div>

        {/*click để bắt đầu update*/}
        <button onClick={ () => this.updateState() }>updating</button>
    
        {/*click để remove component: Unmounting. Ở đây test xóa component content*/}
        <button onClick={ () => this.unmounting() }>Unmounting</button>

      </div>
    );
  }
}

export default App;


//F12 vào console xem kqua