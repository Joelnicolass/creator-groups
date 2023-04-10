import { useState } from "react";

import { adapterGroups } from "../adapters/adapterGroups";
import {
  CONTENT_TYPE,
  createArrayFromTextWithLineBreaks,
  createGroupsFromArr,
  deleteDuplicatesElements,
  deleteEmptyElements,
  getFormFields,
  isValidEmail,
} from "../../../shared/utils/general.utils";

const useGroups = (
  { groupSize } = {
    groupSize: 2,
  }
) => {
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
      size: groupSize,
    });

    return adapterGroups(groups);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const groupsEmails = getGroups(event);
    setGroups(groupsEmails);
  };

  const getDownloadData = (group) => {
    return {
      fileName: `${group.id}.json`,
      fileContent: JSON.stringify(group),
      fileType: CONTENT_TYPE.JSON,
    };
  };

  return {
    groups,
    handleSubmit,
    getDownloadData,
  };
};

export default useGroups;
