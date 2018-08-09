import React, {Component} from 'react';

class NoControlInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello, girl!'
        }

    }
    inputChange() {

    }
    handleClick() {
        this.setState({
            value:'Hello, boy!'
        })
    }
    render() {
        return (
            <div>
                <input defaultValue={this.state.value} onChange={this.inputChange.bind(this)} type='text' />
                <button type='button' onClick={this.handleClick.bind(this)}>修改state的值</button>
            </div>
        )
    }
}

export default NoControlInput;