import React, {Component} from 'react'
import SayHello from '../components/say-hello'
import UserInfo from '../components/user-info'
import WebShow from '../components/web-show'
import NameList from '../components/name-list'
import Time from '../components/time'
// 创建组件, 组件名必须大写
const name = 'Herry'
class App extends Component{
    render(){
        return (
            // 组件只允有一个根标签
            <div id='app'>
                <h1 className='title'>Hello, boy!</h1>
                {/* jsx表达式 */}
                <h1>Hello, {name}!</h1>
                <SayHello name="你好！" />
                <hr />
                <UserInfo age={18} gender='你猜'/>
                <hr />
                <WebShow />
                <hr/>
                <NameList>
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                </NameList>
                <hr/>
                <Time />
            </div>        
        )
    }
}
// 导出组件
export default App;