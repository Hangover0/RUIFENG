import React, {Component} from 'react';

const NOEnter = () => (
    <div>
        <p>温馨提示：</p>
        <h3>小朋友不能进来哟!</h3>
    </div>
);
const YESEnter = () => (
    <div>
        <p>温馨提示：</p>
        <h3>客官请进!</h3>
    </div>
);

class Conditions extends Component {
    render () {
        const age = 15;
        const yes = <YESEnter />;
        const no  = <NOEnter />;
        if(!this.props.rShow) {
            return null;
        }
        if(age >= 18) {
            // return <YESEnter />
            return yes;
        }else {
            // return <NOEnter />
            return no;
        }
    }
}
export default Conditions;