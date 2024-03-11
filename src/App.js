import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Tabs, Card, Col, Row, Button } from 'antd';
import DOMPurify from 'dompurify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('1');
  const [tinymceValue1, setTinymceValue1] = useState(``);
  const [tinymceValue2, setTinymceValue2] = useState(``);
  const [tinymceValue3, setTinymceValue3] = useState(``);
  const [tinymceValue4, setTinymceValue4] = useState(``);
  const [tinymceValue5, setTinymceValue5] = useState(``);
  const [tinymceValue6, setTinymceValue6] = useState(``);
  const [tinymceValue7, setTinymceValue7] = useState(``);
  const [tinymceValue8, setTinymceValue8] = useState(``);
  const [tinymceValue9, setTinymceValue9] = useState(``);
  const [tinymceValue10, setTinymceValue10] = useState(``);
  const [tinymceValue11, setTinymceValue11] = useState(``);
  const [tinymceValue12, setTinymceValue12] = useState(``);
  const [tinymceValue13, setTinymceValue13] = useState(``);
  const [tinymceValue14, setTinymceValue14] = useState(``);
  const [tinymceValue15, setTinymceValue15] = useState(``);
  const [tinymceValue16, setTinymceValue16] = useState(``);
  const [tinymceValue17, setTinymceValue17] = useState(``);
  const [tinymceValue18, setTinymceValue18] = useState(``);
  const [tinymceValue19, setTinymceValue19] = useState(``);

  const fetchData = async () => {
    try {
      const response = await fetch('https://orangelineid.com/core.php?act=all');
      const jsonData = await response.json();
      setTinymceValue1(jsonData.text_1);
      setTinymceValue2(jsonData.text_2);
      setTinymceValue3(jsonData.text_3);
      setTinymceValue4(jsonData.text_4);
      setTinymceValue5(jsonData.text_5);
      setTinymceValue6(jsonData.text_6);
      setTinymceValue7(jsonData.text_7);
      setTinymceValue8(jsonData.text_8);
      setTinymceValue8(jsonData.text_8);
      setTinymceValue10(jsonData.text_10);
      setTinymceValue11(jsonData.text_11);
      setTinymceValue12(jsonData.text_12);
      setTinymceValue13(jsonData.text_13);
      setTinymceValue14(jsonData.text_14);
      setTinymceValue15(jsonData.text_15);
      setTinymceValue16(jsonData.text_16);
      setTinymceValue17(jsonData.text_17);
      setTinymceValue18(jsonData.text_18);
      setTinymceValue19(jsonData.text_19);

    } catch (error) {
      toast.error("Error Data Cannot Be Load !", {
        position: "top-right"
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [tinymceValue1]);

  const sanitizedHtml1 = DOMPurify.sanitize(tinymceValue1);
  const sanitizedHtml2 = DOMPurify.sanitize(tinymceValue2);
  const sanitizedHtml3 = DOMPurify.sanitize(tinymceValue3);
  const sanitizedHtml4 = DOMPurify.sanitize(tinymceValue4);
  const sanitizedHtml5 = DOMPurify.sanitize(tinymceValue5);
  const sanitizedHtml6 = DOMPurify.sanitize(tinymceValue6);
  const sanitizedHtml7 = DOMPurify.sanitize(tinymceValue7);
  const sanitizedHtml8 = DOMPurify.sanitize(tinymceValue8);
  const sanitizedHtml9 = DOMPurify.sanitize(tinymceValue9);
  const sanitizedHtml10 = DOMPurify.sanitize(tinymceValue10);
  const sanitizedHtml11 = DOMPurify.sanitize(tinymceValue11);
  const sanitizedHtml12 = DOMPurify.sanitize(tinymceValue12);
  const sanitizedHtml13 = DOMPurify.sanitize(tinymceValue13);
  const sanitizedHtml14 = DOMPurify.sanitize(tinymceValue14);
  const sanitizedHtml15 = DOMPurify.sanitize(tinymceValue15);
  const sanitizedHtml16 = DOMPurify.sanitize(tinymceValue16);
  const sanitizedHtml17 = DOMPurify.sanitize(tinymceValue17);
  const sanitizedHtml18 = DOMPurify.sanitize(tinymceValue18);
  const sanitizedHtml19 = DOMPurify.sanitize(tinymceValue19);

  const editorRef1 = useRef(null);
  const editorRef2 = useRef(null);
  const editorRef3 = useRef(null);
  const editorRef4 = useRef(null);
  const editorRef5 = useRef(null);
  const editorRef6 = useRef(null);
  const editorRef7 = useRef(null);
  const editorRef8 = useRef(null);
  const editorRef9 = useRef(null);
  const editorRef10 = useRef(null);
  const editorRef11 = useRef(null);
  const editorRef12 = useRef(null);
  const editorRef13 = useRef(null);
  const editorRef14 = useRef(null);
  const editorRef15 = useRef(null);
  const editorRef16 = useRef(null);
  const editorRef17 = useRef(null);
  const editorRef18 = useRef(null);
  const editorRef19 = useRef(null);

  const log = async() => {
    if (editorRef1.current) {
      setTinymceValue1(editorRef1.current.getContent());
    }

    if (editorRef2.current) {
      setTinymceValue2(editorRef2.current.getContent());
    }
    
    if (editorRef3.current) {
      setTinymceValue3(editorRef3.current.getContent());
    }

    if (editorRef4.current) {
      setTinymceValue4(editorRef4.current.getContent());
    }

    if (editorRef5.current) {
      setTinymceValue5(editorRef5.current.getContent());
    }

    if (editorRef6.current) {
      setTinymceValue6(editorRef6.current.getContent());
    }

    if (editorRef7.current) {
      setTinymceValue7(editorRef7.current.getContent());
    }

    if (editorRef8.current) {
      setTinymceValue8(editorRef8.current.getContent());
    }

    if (editorRef9.current) {
      setTinymceValue9(editorRef9.current.getContent());
    }

    if (editorRef10.current) {
      setTinymceValue10(editorRef10.current.getContent());
    }

    if (editorRef11.current) {
      setTinymceValue11(editorRef11.current.getContent());
    }

    if (editorRef12.current) {
      setTinymceValue12(editorRef12.current.getContent());
    }

    if (editorRef13.current) {
      setTinymceValue13(editorRef13.current.getContent());
    }

    if (editorRef14.current) {
      setTinymceValue14(editorRef14.current.getContent());
    }

    if (editorRef15.current) {
      setTinymceValue15(editorRef15.current.getContent());
    }

    if (editorRef16.current) {
      setTinymceValue16(editorRef16.current.getContent());
    }

    if (editorRef17.current) {
      setTinymceValue17(editorRef17.current.getContent());
    }

    if (editorRef18.current) {
      setTinymceValue18(editorRef18.current.getContent());
    }

    if (editorRef19.current) {
      setTinymceValue19(editorRef19.current.getContent());
    }

    try {
      const postData = {
        text_1: editorRef1.current.getContent(),
        text_2: editorRef2.current.getContent(),
        text_3: editorRef3.current.getContent(),
        text_4: editorRef4.current.getContent(),
        text_5: editorRef5.current.getContent(),
        text_6: editorRef6.current.getContent(),
        text_7: editorRef7.current.getContent(),
        text_8: editorRef8.current.getContent(),
        text_9: editorRef9.current.getContent(),
        text_10: editorRef10.current.getContent(),
        text_11: editorRef11.current.getContent(),
        text_12: editorRef12.current.getContent(),
        text_13: editorRef13.current.getContent(),
        text_14: editorRef14.current.getContent(),
        text_15: editorRef15.current.getContent(),
        text_16: editorRef16.current.getContent(),
        text_17: editorRef17.current.getContent(),
        text_18: editorRef18.current.getContent(),
        text_19: editorRef19.current.getContent(),
      }
      const response = await fetch('https://orangelineid.com/core.php?act=save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      const jsonData = await response.json();
      if (jsonData.status !== 'ok' ) {
        return toast.error("Error Save Data !", {
          position: "top-right"
        });
      }

      return toast.success("Data Saved Succesfully!", {
        position: "top-right"
      });
    } catch (error) {
      return toast.error("Failed Save Data !", {
        position: "top-right"
      });
    }
  };

  const onChange = (key) => {
    setActiveTab(key);
  };

  const items = [
    {
      key: '1',
      label: 'Editor',
      children: (
        <>
        <h4>Editor 1</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef1.current = editor}
            initialValue={tinymceValue1}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
          
          <h4>Editor 2</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef2.current = editor}
            initialValue={tinymceValue2}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 3</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef3.current = editor}
            initialValue={tinymceValue3}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 4</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef4.current = editor}
            initialValue={tinymceValue4}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 5</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef5.current = editor}
            initialValue={tinymceValue5}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 6</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef6.current = editor}
            initialValue={tinymceValue6}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 7</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef7.current = editor}
            initialValue={tinymceValue7}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 8</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef8.current = editor}
            initialValue={tinymceValue8}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 9</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef9.current = editor}
            initialValue={tinymceValue9}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 10</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef10.current = editor}
            initialValue={tinymceValue10}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 11</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef11.current = editor}
            initialValue={tinymceValue11}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 12</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef12.current = editor}
            initialValue={tinymceValue12}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 13</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef13.current = editor}
            initialValue={tinymceValue13}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 14</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef14.current = editor}
            initialValue={tinymceValue14}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 15</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef15.current = editor}
            initialValue={tinymceValue15}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 16</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef16.current = editor}
            initialValue={tinymceValue16}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 17</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef17.current = editor}
            initialValue={tinymceValue17}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 18</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef18.current = editor}
            initialValue={tinymceValue18}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <h4>Editor 19</h4>
          <Editor
            apiKey='ova4n38r3430h1jnn401zm3rk6hu7iro75dr919z0a0lam8z'
            onInit={(evt, editor) => editorRef19.current = editor}
            initialValue={tinymceValue19}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />

          <div className="floating-save">
            <Button type="primary" onClick={log}>Save Content</Button>
          </div>
        </>
      ),
    },
    {
      key: '2',
      label: 'Result',
      children: (
        <>
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml1 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml2 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml3 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml4 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml5 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml6 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml7 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml8 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml9 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml10 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml11 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml12 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml13 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml14 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml15 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml16 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml17 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml18 }} />
           <hr/> 
           <div dangerouslySetInnerHTML={{ __html: sanitizedHtml19 }} />
        </>
      )
    },
  ];

  return (
    <>
      <div className='container'>
      <ToastContainer />
        <Row gutter={24}>
          <Col span={24}>
            <Card title="Rich Text" bordered={true} className="margin-bottom-60">
              <Tabs defaultActiveKey="1" activeKey={activeTab} items={items} onChange={onChange}/>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}