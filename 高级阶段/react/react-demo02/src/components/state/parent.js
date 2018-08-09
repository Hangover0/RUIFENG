import React, {Component} from 'react'
import Child01 from './child01'
import Child02 from './child02'

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: '未登录'
        }
        this.cLoginState = this.cLoginState.bind(this);
    }
    cLoginState(state) {
        this.setState({
            isLogin: state
        })
    }
    render() {
        return <div>
            <p>{this.state.isLogin}</p>
            <Child01 loginState={this.state.isLogin} cLoginState={this.cLoginState} />
            <Child02 loginState={this.state.isLogin} cLoginState={this.cLoginState}/>
        </div>
    }
}
export default Parent;

