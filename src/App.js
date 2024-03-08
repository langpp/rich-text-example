import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Tabs, Card, Col, Row, Button } from 'antd';
import DOMPurify from 'dompurify';

export default function App() {
  const [activeTab, setActiveTab] = useState('1');
  const [tinymceValue1, setTinymceValue1] = useState(`<h1>What is rich text?</h1><p>Rich Text is a field type that enables authors to create rich text content, similar to traditional "What you see is what you get" (wysiwyg) editors. The key difference here is that the Contentful Rich Text Field (RTF) response is returned as pure JSON rather than HTML. It offers common text formatting options such as paragraphs, lists and blockquotes, and allows entries and assets from Contentful to be linked dynamically and embedded within the flow of the text.</p>
  
  <h2 id="rich-text-on-the-web-app">Rich Text on the Web App</h2><img src="https://source.unsplash.com/random/900×700/?fruit" alt="Deskripsi Gambar" style="width:100%;max-width:300px;height:auto; margin:0px auto;display:block; position:relative;"><p>The menu bar at the top of the Rich Text editor provides authors with all the usual text formatting capabilities, including creating links to a static URL, and inserting links to Contentful entries and assets from within the same Contentful space or entries from other spaces with <a href="/help/references-across-spaces-in-rich-text-fields">cross-space references</a>.</p>
  
  <h2 id="rich-text-on-the-api-response">Rich Text on the API Response</h2>
  <p>The RTF API response is returned as a JSON array of nodes that follows the format of an abstract syntax tree.</p>
  <p>The following is an example of a RTF REST API response which returns a paragraph — "This text is important" — with the word "important" marked as bold:</p>
  <pre style="background:whitesmoke;"><code class="language-json hljs">{
    <span class="hljs-attr">"nodeType"</span>: <span class="hljs-string">"document"</span>,
    <span class="hljs-attr">"data"</span>: {},
    <span class="hljs-attr">"content"</span>: [
      {
        <span class="hljs-attr">"nodeType"</span>: <span class="hljs-string">"paragraph"</span>, <span class="hljs-comment">// Can be paragraphs, images, lists, embedded entries</span>
        <span class="hljs-attr">"data"</span>: {},
        <span class="hljs-attr">"content"</span>: [
          {
            <span class="hljs-attr">"nodeType"</span>: <span class="hljs-string">"text"</span>,
            <span class="hljs-attr">"value"</span>: <span class="hljs-string">"This text is "</span>,
            <span class="hljs-attr">"data"</span>: {},
            <span class="hljs-attr">"marks"</span>: []
          },
          {
            <span class="hljs-attr">"nodeType"</span>: <span class="hljs-string">"text"</span>,
            <span class="hljs-attr">"value"</span>: <span class="hljs-string">"important"</span>,
            <span class="hljs-attr">"data"</span>: {},
            <span class="hljs-attr">"marks"</span>: [
              <span class="hljs-string">"type"</span>: <span class="hljs-string">"bold"</span>
            ]
          }
        ]
      }
    ]
  }</code></pre>

  <table border="1" style="width:100%;border-collapse:collapse"><tr><th>Nama</th><th>Umur</th><th>Pekerjaan</th></tr><tr><td>Alice</td><td>30</td><td>Desainer Grafis</td></tr><tr><td>Bob</td><td>25</td><td>Developer Web</td></tr><tr><td>Charlie</td><td>35</td><td>Penulis</td></tr></table>
  
  <h2 id="embedded-and-linked-entries-in-rich-text">Embedded and Linked Entries in Rich Text</h2>
  <p>Rich Text allows editors to link and embed entries in the flow of text in the UI. These links are returned in the RTF API response as references, and the referenced data is returned in a separate object (more on this below). As a developer, this gives you the flexibility on the front end to build out the HTML you need for linked assets and entries rather than having to deal with opinionated HTML and formatting from the API.</p>
  <p>For example, you might want to:</p>
  <ul>
  <li>Use custom anchor link wrappers, such as a React Router link or a NextJS Link in your single page application for inline links in Rich Text</li>
  <li>Use the <a href="/developers/docs/references/images-api/">Contentful Images API</a> to resize, crop and manipulate an image that is returned as a linked asset</li>
  <li>Render a widget such as an image gallery, a product description box, a sign up form, an annotation window or anything else in the flow of the RTF!</li>
  </ul>
  `);
  
  const [tinymceValue2, setTinymceValue2] = useState(`<h1>What is Lorem Ipsum?</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2>What is Lorem Ipsum?</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`);
  const [tinymceValue3, setTinymceValue3] = useState(tinymceValue2);
  const [tinymceValue4, setTinymceValue4] = useState(tinymceValue2);
  const [tinymceValue5, setTinymceValue5] = useState(tinymceValue2);
  const [tinymceValue6, setTinymceValue6] = useState(tinymceValue2);
  const [tinymceValue7, setTinymceValue7] = useState(tinymceValue2);
  const [tinymceValue8, setTinymceValue8] = useState(tinymceValue2);
  const [tinymceValue9, setTinymceValue9] = useState(tinymceValue2);
  const [tinymceValue10, setTinymceValue10] = useState(tinymceValue2);
  const [tinymceValue11, setTinymceValue11] = useState(tinymceValue2);
  const [tinymceValue12, setTinymceValue12] = useState(tinymceValue2);
  const [tinymceValue13, setTinymceValue13] = useState(tinymceValue2);
  const [tinymceValue14, setTinymceValue14] = useState(tinymceValue2);
  const [tinymceValue15, setTinymceValue15] = useState(tinymceValue2);
  const [tinymceValue16, setTinymceValue16] = useState(tinymceValue2);
  const [tinymceValue17, setTinymceValue17] = useState(tinymceValue2);
  const [tinymceValue18, setTinymceValue18] = useState(tinymceValue2);
  const [tinymceValue19, setTinymceValue19] = useState(tinymceValue2);

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

  const log = () => {
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
    
    setActiveTab('2');
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