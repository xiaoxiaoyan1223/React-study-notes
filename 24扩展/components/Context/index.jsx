import { func } from 'prop-types'
import React, { Component } from 'react'
import { render } from 'react-dom'
const myContext=React.createContext()
const {Provider,Customer}=myContext

export default class A extends Component {
  state={name:"tom"}
  render() {
    const { name }=this.state
    return (
      <div>
        <h2>我是A组件</h2>
        <h2>我的用户名是{name}</h2>
        <Provider value={name}> 
        {/* 后代谁需要使用需要声明 */}
          <B/>
        </Provider>
        
      </div>
    )
  }
}

 class B extends Component {
    render() {
      return (
        <div>
        <h2>我是B组件</h2>
        <h2>我从A组件接收到的用户名是{this.state.name}</h2>
        <C/>
      </div>
      )
    }
  }


  // class C extends Component {
  //   // 仅适用于类组件
  //   static contextType=myContext
  //   render() {
  //     console.log(this.context)//tom
  //     return (
  //       <div>
  //       <h2>我是B组件</h2>
  //       <h2>我从A组件接收到的用户名是{this.context}</h2>
  //       <C/>
  //     </div>
  //     )
  //   }
  // }

  function C(){
    // 适用于函数组件

    return (
      <div>
      <h2>我是c组件</h2>
      <h2>我从A组件接收到的用户名是
      <Customer>
        {
          value=>{
            // return <h2>{value}</h2>
            // 或者
            return `${value.name}`
          }
        }
      </Customer>
      </h2>
      </div>
      )
   }
   