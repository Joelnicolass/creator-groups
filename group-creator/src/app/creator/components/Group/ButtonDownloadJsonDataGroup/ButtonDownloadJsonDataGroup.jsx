import React from "react";
import ButtonDownload from "../../../../../shared/ButtonDownload/ButtonDownload";
import { useGroupContext } from "../Group";

const ButtonDownloadJsonDataGroup = ({ text = "", children, ...props }) => {
  const { group, getDownloadData } = useGroupContext();
  const { fileContent, fileName, fileType } = getDownloadData(group);

  return (
    <ButtonDownload
      {...props}
      downloadConfig={{
        fileContent,
        fileName,
        fileType,
      }}
      text={text}
    >
      {children}
    </ButtonDownload>
  );
};

export default ButtonDownloadJsonDataGroup;
