import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('加载中...');

  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('后端接口未连接'));
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#00c26e' }}>CI/CD React 前端</h1>
      <p>后端返回：{message}</p>
      <p style={{ color: '#888', fontSize: '14px' }}>版本 v1.0 · GitHub Actions 自动部署</p>
    </div>
  );
}

export default App;
