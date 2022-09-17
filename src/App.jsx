import React, { Component} from 'react';
import { Route,Routes} from 'react-router-dom';
import { Layout } from 'antd';
import './style.css'
import AppHeader from './components/Header'
import Lists from './containers/LIst'
import Detail from './containers/Detail'
import Login from './components/Login'
const { Header, Footer, Content } = Layout;
export default class index extends Component {
  render() {
    return (
			<div>
				<Layout style={{minWidth:1200}}>
      				<Header className='header'><AppHeader/></Header>
      				<Content className='content'>
						<Login/>
						<Routes>
							<Route path='/' element={<Lists/>}/>
							<Route path='/detail/:id' element={<Detail/>}/>
							
						</Routes>
					</Content>
      				<Footer className='footer'>Footer</Footer>
   				 </Layout>
			</div>
		)
  }
}
