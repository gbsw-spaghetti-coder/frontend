import React, {useRef, useState} from 'react';
import '../styles/write.css';
import ToastEditor from '../components/ToastEditor';
import WriteLayout from '../components/WriteLayout';
import Header from '../components/Header';
import {Editor} from "@toast-ui/react-editor";
import axios from 'axios';

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const editorRef = useRef();

  const titleHandler = (e) => {
    setTitle(e.target.value);
    console.log(title);
  }

  const categoryHandler = (e) => {
    setCategory(e.target.value);
    console.log(category);
  }

  const contentHandler = (e) => {
    setContent(editorRef.current?.getInstance().getHTML());
  }

  const submit = async () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    //console.log(editorRef.current?.getInstance().getHTML());
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    //console.log(editorRef.current?.getInstance().getMarkdown());
    setContent(editorRef.current?.getInstance().getHTML());

    const data = { title, content, category };
    console.log(data);


    await axios.post('/api/question', data, {withCredentials: true})
      .then((res) => {
        alert(res.data.message);
        window.location.href = '/';
      })
      .catch((err) => {
        console.error(err);
        alert(err.response.data.message);
      })
  };

  return (
    <div style={{ background: '#f5f5f5', height: '100vh'}}>
    <Header />
      <div className="writeLayout-container">
        <div className="write-layout">
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            name="write-title"
            className="writeToTitle"
            onChange={titleHandler}
          />
          <select name="choice" className="choiceToCategory" onChange={categoryHandler}>
            <option selected>카테고리 선택</option>
            <option disabled>- 프론트엔드 -</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JavaScript</option>
            <option value="ts">TypeScript</option>
            <option value="react">ReactJs</option>
            <option value="vue">VueJs</option>
            <option disabled>- 백엔드 -</option>
            <option value="c">C</option>
            <option value="c#">CS</option>
            <option value="c++">CPP</option>
            <option value="go">Go</option>
            <option value="java">JAVA</option>
            <option value="php">PHP</option>
            <option value="py">Python</option>
            <option value="rudy">Ruby</option>
            <option value="rust">Rust</option>
            <option value="spring">Spring</option>
            <option value="ts">TypeScript</option>
            <option value="node">NodeJs</option>
            <option disabled>- 기타 -</option>
            <option value="sql">Sql</option>
            <option value="linux">Linux</option>
            <option value="unity">Unity</option>
            <option value="arduino">Arduino</option>
            <option value="android">Android</option>
          </select>
        </div>
      </div>
      <div style={{ width: "700px", margin: "auto", marginTop: '20px', boxShadow: '0px 2px 3px #d3d3d3' }}>
        <Editor
          ref={editorRef}
          initialValue=" "
          placeholder='내용을 입력해주세요.'
          previewStyle="vertical"
          height="350px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={contentHandler}
        />
      </div>
    <button type='submit' className='write-button' onClick={submit}>글 등록</button>
    </div>
  )
}

export default Write;