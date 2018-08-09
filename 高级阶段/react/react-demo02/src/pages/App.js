import React, {Component} from 'react';
import LifeCircle from '../components/life-circle'
import Login from '../components/login'
import Conditions from '../components/conditions'
import List from '../components/list'
import Input from '../components/input'
import MoreInput from '../components/more-input'
import NoControlInput from '../components/no-control-input'
import Parent from '../components/state/parent'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            infos: [
                {name: '苹果', des: '苹果酸甜酸甜的'},
                {name: '芒果', des: '芒果其实很好吃'},
                {name: '榴莲', des: '榴莲是水果之王，但是味道很奇怪'},
            ]
        }
    }
    componentDidMount() {
        console.log('App 挂载完成！');
        // 刷新组件
        this.forceUpdate();
    }
    btnClick = () => {
        this.setState((prevState) => ({
            isShow: !prevState.isShow
        }));
    }
    add = () => {
        let temp = this.state.infos;
        temp.push({
            name: '耀哥',
            des: "贼帅"
        })
        this.setState((prevState) => ({
            infos: temp
        }));
    }
    render() {
        return (
            <div id='app'>
                <LifeCircle />
                <Login />
                <hr />
                <button onClick={this.btnClick} type='button'>点击显示/隐藏</button>
                <Conditions rShow={this.state.isShow} />
                
                <hr />
                <button type='button' onClick={this.add}>添加</button>
                <List items={this.state.infos}/>

                <hr />
                <Input />

                <hr/>
                <MoreInput />

                <hr/> 
                <NoControlInput />

                <hr/>
                <Parent/>
            </div>
        )
    }
}
export default App;