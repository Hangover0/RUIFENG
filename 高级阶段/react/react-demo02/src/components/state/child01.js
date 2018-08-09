import React, {Component} from 'react'

class Child01 extends Component {
    constructor(props) {
        super(props);
        this.btnClick = this.btnClick.bind(this);
    }
    btnClick() {
        // 假设已经登陆  
        this.props.cLoginState('我是大儿子，我在修改数据！');
    }
    render() {
        return <div>
                我是大儿子：- {this.props.loginState}-
                <button type='button'
                        onClick={this.btnClick}>修改登录状态</button>
               </div>
    }
}

export default Child01;