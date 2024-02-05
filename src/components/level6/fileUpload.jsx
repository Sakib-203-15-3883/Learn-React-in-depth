// import { useState } from 'react';
// import axios from 'axios';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [data, setData] = useState([]);
//   const [downloadedFile, setDownloadedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('file', file);

//       const response = await axios.post('http://localhost:8080/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       setUploadedFile(response.data);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   const getFile = async (fileName) => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/file/${fileName}`, {
//         responseType: 'blob'
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       setDownloadedFile(url);
//     } catch (error) {
//       console.error('Error fetching file:', error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <h1 className='text-3xl font-bold m-10'>Here we will learn how to upload file to backend server and get that file and show over UI </h1>

//         {/* To take file from users we use input tag with file type and store that file on component state  */}

//         <input type="file" onChange={handleFileChange} />

//         {/* now we need to upload this file , we use button to upload this file  */}
//         <button onClick={handleUpload}>Upload</button>
//         {/* display uploaded file information  */}
//         {uploadedFile && (
//           <div>
//             <h2>Uploaded File Details:</h2>
//             <p>Original Name: {uploadedFile.originalname}</p>
//             <p>File Path: {uploadedFile.path}</p>
//           </div>
//         )}

//         <h1> Get The File </h1>
//         <button onClick={() => getFile('file.pdf')}>Get File</button>
//         {downloadedFile && (
//           <div>
//             <a href={downloadedFile} download="document.pdf"> {/* Update the download attribute */}
//               Download PDF
//             </a>

//           </div>
//         )}
//       </div>
//     </>

//   );
// };

// export default FileUpload;

import { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFileInformation, setUploadedFileInformation] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleUploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("http://localhost:8080/api/upload", formData, {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setUploadedFileInformation(response.data);
    } catch (err) {
      console.error("error to upload ", err);
    }
  }

  const getFile = async (fileName) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/file/${fileName}`, {
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
    } catch (err) {
      console.log("error", err);
    }
  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Upload the file</h1>
        <input type="file" onChange={handleFileUpload} className="mb-4" />
        <button onClick={handleUploadFile} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Upload</button>
      </div>

      <div className="p-4">
        {uploadedFileInformation && (
          <div>
            <h2 className="text-lg font-bold">Uploaded File Details:</h2>
            <p>Original Name: {uploadedFileInformation.originalname}</p>
            <p>File Path: {uploadedFileInformation.path}</p>
          </div>
        )}
      </div>

      <div className="p-4">
        <button onClick={() => getFile("file.pdf")} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Get File</button>
      </div>

      {downloadUrl && (
        <div className="p-4">
          <a href={downloadUrl} download="document.pdf" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Download File</a>
        </div>
      )}
    </>
  );
};

export default FileUpload;
