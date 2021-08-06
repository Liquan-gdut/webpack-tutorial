import React from 'react';
import { Button, message } from 'antd';

const App = () => {
  const showSuccessInfo = () => {
    message.success('脚手架启动成功');
  };
  
  return (
    <div>
      <Button type="primary" onClick={showSuccessInfo}>
        点击触发
      </Button>
      <h1>Hello React with Webpack!</h1>
      <ul>
        {['a', 'b', 'c'].map((name) => (
          <li>{`I'm ${name}!`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
