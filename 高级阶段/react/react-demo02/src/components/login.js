import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Hello, world!'
        }
        // 动态绑定this 
        // this.btnClick = this.btnClick.bind(this);
    }
    btnClick(params, event) {
    
        console.log('click the login btn.')
        console.log(event);
        console.log(this.state.msg); 
        console.log(params);
        console.log(this.username);
        if(this.username.value === 'admin' && this.password.value === '123') {
            alert('登陆成功！');
        }else {
            alert('登陆失败！');
        }
    }
    render() {
        return (
            <div className='login-page'>
                <input ref={(input) => this.username = input} type='text' placeholder='请输入账号' />
                <br />
                <input ref={(input) => this.password = input} type='password' placeholder='请输入密码' />
                <br />
                <br />
                {/* <button  onClick={this.btnClick} type='button'>点击登陆</button> */}
                <button  onClick={this.btnClick.bind(this, '我是参数')} type='button'>点击登陆</button>
            </div>
        )
    }
}

export default Login;