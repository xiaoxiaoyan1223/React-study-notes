/*
npm install pubsub-js --save
yarn add pubsub-js
*/

// A组件
import PubSub from 'pubsub-js;
componentDidMount() {  
  // 订阅一个myEvent事件，当有发布myEvent事件时触发回调从而获取到发布的数据
  PubSub.subscribe('myEvent', (msg, data) => {  
    // 处理接收到的数据  
    console.log(msg, data);  // 'myEvent', { message: 'Hello from another sibling!' }
  });  
}  

componentWillUnmount() {  
  // 组件卸载时取消订阅，避免内存泄漏  
  PubSub.unsubscribe('myEvent', this.handleMyEvent);  
}

// B组件
import PubSub from 'pubsub-js;

handleClick = () => {  
  // 发布一个myEvent事件，该事件和数据会被订阅myEvent事件的回调捕获
  PubSub.publish('myEvent', { message: 'Hello from another sibling!' }); 
};  

render() {  
  return (  
    <button onClick={this.handleClick}>Publish Event</button>  
  );  
}
