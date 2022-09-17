import React, { Component ,Fragment} from 'react'
import logo from './logo.png'
import './style.css'
import Demo from './nav';
export default class AppHeader extends Component {
  render() { 
    return (
      <Fragment>
      <img src={logo}  alt="logo" className='app-header-logo'/>
      <Demo/>
    </Fragment>
    )
  }
}
