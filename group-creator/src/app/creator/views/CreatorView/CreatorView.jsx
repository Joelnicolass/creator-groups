import React from "react";
import useGroups from "../../hooks/useGroups";
import FormCreateGroups from "../../components/FormCreateGroups/FormCreateGroups";
import GroupsViewer from "../../components/GroupsViewer/GroupsViewer";
import Group from "../../components/Group/Group";

import styles from "./CreatorView.module.css";

const CreatorView = () => {
  const { groups, handleSubmit, getDownloadData } = useGroups({
    groupSize: 5,
  });

  return (
    <div className={styles.container}>
      <div>
        <h1>Creador de Grupos!</h1>
      </div>

      <FormCreateGroups handleSubmit={handleSubmit} />
      <GroupsViewer
        className={styles.groupsViewer}
        groups={groups}
        componentForShowDataGroup={(group) => (
          <Group
            className={styles.group}
            getDownloadData={getDownloadData}
            group={group}
          >
            <Group.ButtonDownload className={styles.buttonDownload}>
              <h3>Descargar JSON</h3>
            </Group.ButtonDownload>
          </Group>
        )}
      />
    </div>
  );
};

export default CreatorView;
