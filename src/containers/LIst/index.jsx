import 'antd/dist/antd.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {List } from 'antd';
import React, { Component } from 'react'
export default class Lists extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
  render() {
    return (
        <>
        <List
        style={{background:'#fff'}}
          size="large"
          bordered
          dataSource={this.state.data}
          renderItem={(item) => 
          <List.Item>
            <Link to={`/detail/${item.id}`}>
            {item.title}
            </Link>
          </List.Item>}
        />
      </>
    )
  }
  componentDidMount(){
    axios.get('http://www.dell-lee.com/react/api/list.json')
    .then(res=>{
       this.setState({
        data:res.data.data
       })
    })
  }
}
