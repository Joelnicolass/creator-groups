import React, { useState } from "react";

// ------------------------------
// interface for data

/* 
  gropus = [
    {
      leader: "email",
      members: ["email", "email"]
    }
  ]
*/

// ------------------------------
// Utils

/* export const getFormFields = (event) =>
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
  content,
  fileName,
  contentType = CONTENT_TYPE.TEXT,
}) => {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
}; */

// ------------------------------
// Adapter

/* const adapterGroup = (groups) => {
  const groupsAdapter = groups.map((group) => {
    const leader = getRandomIndexFromArr(group);
    const members = group.filter((member) => member !== leader);
    return { leader, members };
  });

  return groupsAdapter;
};
 */
// ------------------------------
// Component

/*
const GROUP_SIZE = 5;

const CreatorView = () => {
  const [groups, setGroups] = useState([]);

  const deleteInvalidEmails = (array) => array.filter(isValidEmail);

  const getFormattedEmails = (event) => {
    const rawEmails = getFormFields(event).emails.toString();
    const emails = createArrayFromTextWithLineBreaks(rawEmails);
    const emailsWithoutDuplicates = deleteDuplicatesElements(emails);
    const emailsWithoutEmptyElements = deleteEmptyElements(
      emailsWithoutDuplicates
    );
    const emailsWithoutInvalidEmails = deleteInvalidEmails(
      emailsWithoutEmptyElements
    );
    return emailsWithoutInvalidEmails;
  };

  const getGroups = (event) => {
    const emails = getFormattedEmails(event);
    const groups = createGroupsFromArr({
      array: emails,
      size: GROUP_SIZE,
    });

    return adapterGroup(groups);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const groupsEmails = getGroups(event);
    setGroups(groupsEmails);
  };

  const downloadGroup = (group, name) => {
    const content = JSON.stringify(group);
    const fileName = `${name}.json`;

    downloadFile({
      content,
      fileName,
      contentType: CONTENT_TYPE.JSON,
    });
  };

  return (
    <div>
      <div>
        <h1>Creador de Grupos!</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <textarea name="emails"></textarea>
          <button type="submit">Crear</button>
        </form>
      </div>

      <div>
        <h2>Grupos</h2>
        {groups.map((group, index) => (
          <div>
            <h3>Grupo {index + 1}</h3>
            <ul>
              <li className="leader">{group.leader}</li>
              {group.members.map((member) => (
                <li className="member">{member}</li>
              ))}
            </ul>

            <button
              onClick={() => {
                downloadGroup(group, `Grupo ${index + 1}`);
              }}
            >
              Descargar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorView;

*/
