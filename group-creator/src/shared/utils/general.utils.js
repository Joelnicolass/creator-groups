export const getFormFields = (event) =>
  Object.fromEntries(new window.FormData(event.target));

export const createArrayFromTextWithLineBreaks = (emails) => emails.split("\n");

export const deleteDuplicatesElements = (array) => [...new Set(array)];

export const createGroupsFromArr = ({ array, size }) => {
  const groups = [];

  for (let i = 0; i < array.length; i += size) {
    groups.push(array.slice(i, i + size));
  }

  return groups;
};

export const getRandomIndexFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const isValidEmail = (email) => email.includes("@");
export const deleteEmptyElements = (array) => array.filter((el) => el !== "");

export const CONTENT_TYPE = {
  JSON: "application/json",
  TEXT: "text/plain",
};

export const downloadFile = ({
  fileContent,
  fileName,
  fileType = CONTENT_TYPE.TEXT,
}) => {
  const a = document.createElement("a");
  const file = new Blob([fileContent], { type: fileType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
};
