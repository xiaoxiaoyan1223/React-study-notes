import React, { Component } from 'react'

export default class Father extends Component {
  render() {
    return (
      <div>
        <h3>我是parent组件</h3>
        {/* 标签体内容会存到props里面的children属性 */}
        <A> hello </A>
        <A render={(name)=>{return <B name={name}/>}}>
            {/* 如果这样写A想给B传递参数，则需要定义一个回调 */}
            {/* <B/> */}
        </A>
      </div>
    )
  }
}

class A extends Component {
    state={name:"lala"}
    render() {
        const {name}=this.state
      return (
        <div>
          <h3>我是A组件</h3>
          {/* 这样展示 */}
          {this.props.children}
          {/* 这样展示,并传参*/}
          {this.props.render(name)}

          <B/>
        </div>
      )
    }
  }

  class B extends Component {
    render() {
      return (
        <div>
          <h3>我是B组件</h3>
        </div>
      )
    }
  }
