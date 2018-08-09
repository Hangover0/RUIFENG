import React, {Component} from 'react';
import TabBar from '../components/tabbar'
import NavigtaionBar from '../components/navigationbar'
import '../styles/mine.css'
import {Icon} from 'antd'

class Mine extends Component {
  handleCancellation(){
    this.props.history.replace('/')
  }
  render () {
    const infos = [
      [
        {title: '钱包', type: 'wallet'},
        {title: '发现', type: 'search'},
        {title: '分享', type: 'share-alt'},
        {title: '指南', type: 'compass'},
        {title: '礼物', type: 'gift'},
      ],
      [
        {title: '设置', type: 'setting'},
        {title: '收藏', type: 'star-o'}
      ],
    ]
    return (
      <div id='app' className='mine'>
        <NavigtaionBar title='我的' />
        <main className='content'>
          {/* infos */}
            <div className='wrap' style={{'background' : 'url(' + require('../asserts/bg.jpg') + ') no-repeat center center'}}>
               <div className="head-portrait" style={{'background' : 'url(' + require('../asserts/bg.jpg') + ') no-repeat center center'}}></div>
               <p className='nikename'>柠檬</p>
               <p className='sigina'>I am waiting for a person to accom pany me for along time.我在等一个人，一个可以陪我很久很久的人。</p>
            </div>
            <div className='tool-box'>
              {
                infos.map((groupList,index)=>{
                  return(
                    <ul key={index} className='tool-list'>
                          {
                            groupList.map((obj)=>{
                              return(
                                <li key={obj.title}>
                                  <div className='box'>
                                    <Icon className='Icon' type={obj.type}></Icon>
                                    <span className='text'>{obj.title}</span>
                                  </div>
                                  <Icon type='right' />
                                </li>
                              )
                            })
                          }
                    </ul>
                  )
                })
              }
            </div>
            <div className='cancellation' onClick={this.handleCancellation.bind(this)}>注销登录</div>
          </main>
        <TabBar />
      </div>)
  }
}

export default Mine;