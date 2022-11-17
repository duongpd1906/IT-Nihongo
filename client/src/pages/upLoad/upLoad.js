import axios from 'axios';
import "./upload.css";

import React, { Component } from 'react';

class UpLoad extends Component {

  state = {

    // Initially, no file is selected
    selectedFile: null
  };

  // On file select (from the pop up)
  onFileChange = event => {

    // Update the state
    this.setState({ selectedFile: event.target.files[0] });

  };

  // On file upload (click the upload button)
  onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {

    if (this.state.selectedFile) {

      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>

        </div>
      );
    } else {
      return (
        <div>
          <br />

        </div>
      );
    }
  };

  render() {

    return (
      <div className='upload-form'>
        <div className='upload-container'>
          <div className='upload-title'>
            <h1>
              新しいトピックを追加
            </h1>
          </div>
          <div className='new-topic-name'>
            <p>トピックの名</p>
            <input type="text" placeholder='Type the name of new topic'></input>
          </div>

          <div className='upfile-form'>
            <input type="file" className='upfile-input' onChange={this.onFileChange} />
            <button className="upload-form__button-submit" onClick={this.onFileUpload}>
              upload
            </button>
          </div>
          {this.fileData()}
        </div>
      </div>
    );
  }
}

export default UpLoad;