import React from 'react';
import Content from "./componenets/Content";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Worker } from '@react-pdf-viewer/core';
import packageJson from '../package.json';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];

function App() {
    return (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
            <Content />
        </Worker>
    );
  }
  
  export default App;