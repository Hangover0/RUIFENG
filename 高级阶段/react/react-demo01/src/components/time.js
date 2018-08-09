import React, {Component} from 'react'
import { setInterval } from 'timers';
// 函数语法
// function Time(){}
const Sunzi = (props) => {
    return (
        <span>{props.msg}</span>
    )
}
const Label = (props) => {
    return (
        <div>
            <span>下面请孙子辈讲话：</span>
            <Sunzi msg={props.msg}/>
        </div>
    )
}
class Time extends Component{
    // 定义状态属性
    // constructor -> 组件构造器
    // 面向对象编程
    // 父类：子类 -> this
    constructor(props){
        super(props);
        // 定义状态属性
        this.state = {
            date: new Date(),
            msg: '有点意思儿'
        }
    }
    // 组件挂载完成
    componentDidMount () {
        // 定义定时器
        // this -> react 组件
        this.timer = setInterval(() => {
            // 每秒更新一次date状态
            // 修改状态属性
            this.setState({
                date: new Date()
            });
        }, 1000)
    }
    componentWillMount(){
        // 清除定时器
        clearInterval(this.timer);
    }
    render(){
        return (
            <h1>
                北京时间：{this.state.date.toLocaleTimeString()}
                -
                <Label msg={this.state.msg} />
            </h1>

        )
    }
}
// 导出组件
export default Time;