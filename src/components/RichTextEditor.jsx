import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import './RichTextEditor.css'; // Import the custom CSS file

RichTextEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

RichTextEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

function RichTextEditor() {
  const [editorContent, setEditorContent] = useState("");

  // Load saved content from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("editorContent", editorContent);
  }, [editorContent]);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

 
    return (
      <div className="rich-text-editor p-2">
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          modules={RichTextEditor.modules}
          formats={RichTextEditor.formats}
          style={{ height: '500px', backgroundColor: 'gray' }}
          className="form-control"
        />
      </div>
    
  
  );
}

export default RichTextEditor;
