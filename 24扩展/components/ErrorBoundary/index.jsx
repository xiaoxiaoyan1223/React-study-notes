import React, { Component } from 'react'

export default class Father extends Component {
    state={
        // 用于标识组件是否会产生错误
        hasError:""
    }
    // 只能捕获后代生命周期函数产生的错误，不能捕获自己的错误和其他组件在合成事件和定时器产生的错误
    // 错误边界 当parent的子组件出现错误时，会触发调用getDerivedStateFromError并携带错误信息
    getDerivedStateFromError(error){
        console.log(error)
        return {hasError:error}
    }
    componentDidCatch(error,info){
        console.log("统计错误次数反馈给服务器，用于通知编码人员进行bug解决")
    }
  render() {
    return (
      <div>
        <h3>我是父组件</h3>
        {this.state.hasError?<h3>当前网络状态不稳定</h3>:<Child/>}
      </div>
    )
  }
}

class Child extends Component {
    render() {
      return (
        <div>Child</div>
      )
    }
  }
  