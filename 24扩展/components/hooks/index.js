// 类式组件
// import React, { Component } from 'react'
// export default class Demo extends Component {
//   render() {
//     state={count:0}
//     add=()=>{
//       // 更新状态
//       this.setState({count:this.state.count+1})
//     }
//     return (
//       <div>
//         <h2>当前求和为{this.state.count}</h2>
//         <button onClick={this.add}>点我求和+1</button>
//       </div>
//     )
//   }
// }
// 函数式组件
import React from 'react'
import { useState,useEffect } from 'react'

function Demo(){
    // 第一次初始化指定的值在内部作缓存
    // 返回值包含两个元素的数组，第一个为内部当前状态值，第二个为更新状态值的函数
    const [count,setCount]=useState(0)

    // 与类式组件的React.createRef()一样
    const content=React.useRef()
    function add(){
        // 第一种写法
        setCount(count+1)
        // 第二种写法
        setCount(count=>count+1)
    }
    function show(){
        // 获取ref对应的DOM元素
        alert(content.current.value)
    }

    // useEffect第一个回调相当于componentDidMount和componentDidUpdate声明周期函数
    useEffect(()=>{
        let timer=setInterval(()=>{
            console.log('定时器每隔1s执行了');
            setCount(count+1)
        },1000)
        return ()=>{
            // 这个回调函数的return 相当于componentWillUnmount生命周期函数
            console.log('组件卸载了');
            clearInterval(timer)
        }
    },[])

    return (
        <div>
            <input type="text" ref={content}></input>
             <h2>当前求和为{count}</h2>
             <button onClick={add}>点我求和+1</button>
             <button onClick={remove}>卸载组件</button>
             <button onClick={show}>点我提示数据</button>
        </div>
    )
}
export default Demo
