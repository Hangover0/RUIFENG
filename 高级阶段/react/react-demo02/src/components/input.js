import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    inputChange() {
        // 更新state
        this.setState({
            value: this.input.value
        });
    }
    render() {
        return (
            <div>
                <input type='text'
                       value={this.state.value} 
                       onChange={this.inputChange.bind(this)} 
                       ref={(input) => {this.input = input}}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}
export default Input;
