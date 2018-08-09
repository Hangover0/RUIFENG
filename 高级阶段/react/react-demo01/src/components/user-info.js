import React, {Component} from 'react'
import '../styles/user-info.css'
import PropTypes from 'prop-types'
class UserInfo extends Component {
    render() {
        let styleObj = {
            color: 'blue'
        }
        return (
            <div className='user-info'>
                {/* 内链样式 */}
                <p style={{color:'red'}}>姓名：{this.props.name}</p>
                {/* 对象样式 */}
                <p style={styleObj}>年龄：{this.props.age}</p>
                {/* 选择器样式 */}
                <p className='gender'>性别：{this.props.gender}</p>
            </div>
        )
    }
}

UserInfo.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
}
// 设置默认值
UserInfo.defaultProps = {
    name: '乔丹'
}
export default UserInfo;