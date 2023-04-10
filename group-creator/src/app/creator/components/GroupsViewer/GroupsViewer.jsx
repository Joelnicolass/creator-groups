import React from "react";

const GroupsViewer = ({
  groups,
  componentForShowDataGroup = (group) => <></>,
  ...props
}) => {
  return (
    <div {...props}>
      {groups.map((group) => (
        <>{componentForShowDataGroup(group)}</>
      ))}
    </div>
  );
};

export default GroupsViewer;
