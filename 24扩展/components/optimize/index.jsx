import React, { Component,PureComponent} from 'react'

export default class Parent extends PureComponent {
    state={carName:'奔驰'};
    changeCar=()=>{
        this.setState({carName:'玛莎拉蒂'})
    }
    // PureComponent 内部实现了shouldComponentUpdate 帮我们实现阀门控制
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('父组件的shouldComponentUpdate')
    //     return nextProps.carName !== this.props.carName || nextState.carName !== this.state.carName
    // }

    // 不要直接修改state，要产生新数据
  render() {
    const {carName} = this.state
    return (
      <div>
        <h1>我是父组件</h1>
        <h2>我的车是：{carName}</h2>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName={carName} />
      </div>
    )
  }
}


class Child extends Component {
    render() {
      return (
        <div>
            <h2>我是child组件</h2>
            <span>我收到的车是{this.props.curName}</span>
        </div>
      )
    }
  }