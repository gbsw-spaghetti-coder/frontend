import React from 'react';
import '../styles/write.css';
import ToastEditor from '../components/ToastEditor';
import WriteLayout from '../components/WriteLayout';
import Header from '../components/Header';

const Write = () => {
  return (
    <div style={{ background: '#f5f5f5', height: '100vh'}}>
    <Header />
    <WriteLayout />
    <ToastEditor />
    <button type='submit' className='write-button'>글 등록</button>
    </div>
  )
}

export default Write;