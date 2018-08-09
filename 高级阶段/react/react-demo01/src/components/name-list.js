import React, {Component} from 'react'
class NameList extends Component{
    render() {
        return (
            <ul className='name-list'>
                {  
                    React.Children.map(this.props.children,(child) => {
                        return <li>{child}</li>
                    })
                }
            </ul>
        )
    }
}

export default NameList;