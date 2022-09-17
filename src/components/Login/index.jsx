import React, { Component } from 'react'
import { Button, Modal,Input,message} from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import './style.css';
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            login:false,
            modal:false,
            user:'',
            password:''
        }    
    }
    showModal=()=>{
        this.setState({
            modal:true
        })
    }
    hiddenModal=()=>{
        this.setState({
            modal:false
        })
    }
    uplogin=()=>{
        this.setState({
            login:false
        })
    }
    changeUser=(e)=>{
        this.setState({
            user:e.target.value
        })
    }
    changePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    checkLogin=()=>{
        const{user,password}=this.state;
        const url=`http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`
        axios.get(url)
        .then(res=>{
            const login=res.data.data.login;
            if(login){
                message.success('登录成功')
                this.setState({
                    login:true,
                    modal:false
                })
            }else{
                message.error('登陆失败');
            }

        })
    }
  render() {
    const {login}=this.state
    return (
      <div className='login'>
        {
            login?<Button type="primary" onClick={this.uplogin}> 退出</Button>:
            <Button type="primary" onClick={this.showModal}> 登录</Button>
        }
        <Modal title="登录" 
        visible={this.state.modal} 
        onOk={this.checkLogin} 
        onCancel={this.hiddenModal}>
         <Input placeholder='请输入用户名' style={{marginBottom:10}}
            value={this.state.user}
            onChange={this.changeUser}/>
         <Input.Password placeholder='请输入用户密码' 
             type="password"
            value={this.state.password} 
            onChange={this.changePassword}/>
      </Modal>
      </div>
    )
  }
  componentDidMount(){
    axios.get('http://www.dell-lee.com/react/api/isLogin.json')
    .then(res=>{
        const login=res.data.data.login;
        this.setState({
            login:login
        })
    })
  }
}
