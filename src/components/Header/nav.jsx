import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { AreaChartOutlined , MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: 'VOA快速英语',
    key: 'mail0',
    icon: <MailOutlined />,
  },
  {
    label: 'VOA慢速英语',
    key: 'mail1',
    icon: <AreaChartOutlined />,
  },
  {
    label: 'VOA常速英语',
    key: 'mail2',
    icon: <MailOutlined />,
  },
  {
    label: 'VOA教学',
    key: 'mail3',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const App = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]}
   mode="horizontal" 
  //  <Link>
   items={items}
  //  </Link>
   
    />;
};

export default App;
