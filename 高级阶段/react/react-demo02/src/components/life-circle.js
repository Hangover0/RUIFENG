import React, {Component} from 'react';

class LifeCircle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    // 组件将要挂载
    componentWillMount() {
        console.log('componentWillMount');
    }
    
    render() {
        console.log('render');
        return <p className='life'>生命周期示例</p>
    }

    // 组件已经挂载
    componentDidMount() {
        // DOM 操作
        // ajax 数据请求
        console.log('componentDidMount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }
    // 组件即将卸载
    componentWillUnmount() {
        // 清除定时器/事件卸载
        console.log('componentWillUnmount');
    }
}

export default LifeCircle;