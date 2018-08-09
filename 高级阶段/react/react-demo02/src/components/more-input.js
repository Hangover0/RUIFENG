import React, {Component} from 'react';


class MoreInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'Hi'
        };
    }
    inputChange(event) {
        let key   = event.target.name; // username
        let value = event.target.value;// value
        this.setState({
            [key]: value
        });
    }
    handleRegister() {
        if(!this.state.username || !this.state.password) {
            alert('完善信息！');
        }else {
            alert('注册成功！');
        }
    }
    render() {
        return (
            <div>
                <input name='username' type='text' onChange={this.inputChange.bind(this)} />
                <br/>
                <input name='password' type='number' onChange={this.inputChange.bind(this)} />
                <br/>
                <input name='tel' type='tel' onChange={this.inputChange.bind(this)} />
                <br/>
                <input name='email' type='email' onChange={this.inputChange.bind(this)} />
                <p><button onClick={this.handleRegister.bind(this)}>注册</button></p>
            </div>
        )
    }
}

export default MoreInput;