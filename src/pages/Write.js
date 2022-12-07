import React, {useRef} from 'react';
import '../styles/write.css';
import ToastEditor from '../components/ToastEditor';
import WriteLayout from '../components/WriteLayout';
import Header from '../components/Header';
import {Editor} from "@toast-ui/react-editor";
import axios from 'axios';

const Write = () => {

  const editorRef = useRef();

  const handleRegisterButton = () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    console.log(editorRef.current?.getInstance().getMarkdown());
  };

  const submit = async () => {
    const data = {

    }
    await axios.post('/api/question', data, {withCredentials: true})
      .then((res) => {

      })

  }

  return (
    <div style={{ background: '#f5f5f5', height: '100vh'}}>
    <Header />
    <WriteLayout />
      <div style={{ width: "700px", margin: "auto", marginTop: '20px', boxShadow: '0px 2px 3px #d3d3d3' }}>
        <Editor
          ref={editorRef}
          initialValue=" "
          placeholder='내용을 입력해주세요.'
          previewStyle="vertical"
          height="350px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
        />
      </div>
    <button type='submit' className='write-button' onClick={handleRegisterButton}>글 등록</button>
    </div>
  )
}

export default Write;