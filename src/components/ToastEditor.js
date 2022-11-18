import React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const ToastEditor = () => {
  return (
    <div style={{ width: "700px", margin: "auto" }}>
    <Editor
      initialValue=" "
      placeholder='내용을 입력해주세요.'
      previewStyle="vertical"
      height="300px"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
    />
    </div>
  );
};

export default ToastEditor;
