import React from 'react';
import ReactDOM from 'react-dom'
import App from './pages/App'
import Time from './components/time'
// ReactDOM.render  用于将模板转换成HTML语言，渲染DOM，并插入到指定的DOM节点中
const element = <h1>Holle, girl!</h1>
ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
// setInterval(() => {
//     ReactDOM.render(
//         <Time />, 
//         document.getElementById('root')
//     );
// }, 1000)

