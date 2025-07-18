import React from "react";
import { FaUpload, FaPaperPlane } from "react-icons/fa";
import { UploadArea, FileInputLabel, HiddenFileInput, IconBtn, UploadMsg } from "../styles/StyledComponents";

const UploadAreaComponent = ({ file, uploadMessage, uploadError, handleFileChosen, handleFileUpload }) => (
  <UploadArea>
    <FileInputLabel as="label">
      <FaUpload />
      <span>{file ? file.name : "Upload PDF"}</span>
      <HiddenFileInput
        type="file"
        accept=".pdf"
        onChange={handleFileChosen}
      />
    </FileInputLabel>
    <IconBtn type="button" onClick={handleFileUpload} title="Upload">
      <FaPaperPlane />
    </IconBtn>
    {uploadMessage && (
      <UploadMsg error={uploadError}>{uploadMessage}</UploadMsg>
    )}
  </UploadArea>
);

export default UploadAreaComponent; 