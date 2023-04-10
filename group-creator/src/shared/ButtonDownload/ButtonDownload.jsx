import React from "react";
import { downloadFile } from "../utils/general.utils";

const ButtonDownload = ({
  text = "",
  children,
  downloadConfig: { fileContent, fileName, fileType },
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={() => {
        downloadFile({
          fileContent,
          fileName,
          fileType,
        });
      }}
    >
      {text}
      {children}
    </button>
  );
};

export default ButtonDownload;
