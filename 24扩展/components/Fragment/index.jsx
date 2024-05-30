import React, { Component,Fragment} from 'react'

export default class Demo extends Component {
  render() {
    return (
        // Fragment标签在渲染的时候不会出现在页面上
        <Fragment>
            <h2>Fragment</h2>
            <p>Fragment 标签</p>
        </Fragment>
    )
  }
}
