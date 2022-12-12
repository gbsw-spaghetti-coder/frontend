import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const ToastEditor = () => {
  return (
    <div
      style={{
        width: '700px',
        margin: 'auto',
        marginTop: '20px',
        boxShadow: '0px 2px 3px #d3d3d3',
      }}
    >
      <Editor
        initialValue=" "
        placeholder="내용을 입력해주세요."
        previewStyle="vertical"
        height="350px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default ToastEditor;
