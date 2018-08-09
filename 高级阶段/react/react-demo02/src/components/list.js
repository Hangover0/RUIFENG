import React, {Component} from 'react';

const LiItem = (props) => (<li>
        <span>{props.item.name}</span>：
        <span>{props.item.des}</span>
    </li>)


class List extends Component {
    // this.props.children
    render () {
        // jsx
        return (<ul>{
            this.props.items.map((item, index) => {
                return <LiItem key={index} item={item}/>
             })
        }</ul>)
    }
}
export default List;