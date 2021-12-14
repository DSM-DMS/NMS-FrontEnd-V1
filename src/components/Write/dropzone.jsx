import React from "react";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import DROPIMG from "../../assets/images/main/Write/dropfile.svg";
import { S } from "./style";

function MyDropzone({ imgfiles, setFiles, preview, setPreview, nextid }) {
  const onDrop = (files) => {
    console.log("files:", files);
    setFiles(
      imgfiles.concat({
        id: nextid,
        data: files,
      })
    );

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function () {
      var dataURL = reader.result;
      console.log(dataURL);
      setPreview(
        preview.concat({
          id: nextid.current,
          data: dataURL,
        })
      );
    };
    console.log(preview);
    nextid.current += 1;
  };
  const handleFileOnChange = (event) => {};

  return (
    <Dropzone
      onDrop={(file, event) => {
        onDrop(file);
        handleFileOnChange(event);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <S.ZoneWrapper img={DROPIMG} {...getRootProps()}>
          <input {...getInputProps()} />
        </S.ZoneWrapper>
      )}
    </Dropzone>
  );
}

export default MyDropzone;
