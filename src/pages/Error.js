import React from 'react';

const Error = () => {
  const redirectMainpage = () => {
    window.location.href = '/';
  };
  return (
    <div>
      <h1>404 error</h1>
      <button onClick={redirectMainpage}>메인으로 돌아가기</button>
    </div>
  );
};

export default Error;
