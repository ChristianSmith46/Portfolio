import React from 'react';
import Content from "./componenets/Content";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Worker } from '@react-pdf-viewer/core';

function App() {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.js">
            <Content />
        </Worker>
    );
  }
  
  export default App;