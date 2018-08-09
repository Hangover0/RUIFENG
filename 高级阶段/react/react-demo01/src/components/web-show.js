import React, {Component} from 'react'
const WebName = () => {
    return (
        <span {...this.props}>VV博客</span>
    )
} 
const WebLink = () => {
    return (
        <a href="https://github.com/lihongyao/">https://github.com/lihongyao/</a>
    )
} 
const WebShow = () => {
    return (
        <div className='web-show'>
            <p>
                <WebName titlt='这是一个连接' data-msg='hi'/>
                <WebLink />
            </p>
        </div>
    )
} 

export default WebShow;