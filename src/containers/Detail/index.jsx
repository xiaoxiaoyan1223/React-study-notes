import React, { Component } from 'react'
import { Card } from 'antd';
import axios from 'axios';
export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'title',
            content:'content'
        }
    }
  render() {
    return (
      <div>
        {
        <Card title={this.state.title} bordered={false}>
        {/* <p>{this.state.content}</p> */}
        {/* <p>{this.state.content}</p>
        <p>{this.state.content}</p> */}
        <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
      </Card>}
      </div>
    )
  }
  componentDidMount(){
    // console.log(this.props.match.params.id);
    const id=this.props.match.params.id;
    axios.get('http://www.dell-lee.com/react/api/detail.json?id='+id)
    .then(res=>{
        this.setState({
            title:res.data.data.title,
            content:res.data.data.content
        })
    })
  }
}
