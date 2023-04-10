import React, { createContext, useContext } from "react";
import ButtonDownloadJsonDataGroup from "./ButtonDownloadJsonDataGroup/ButtonDownloadJsonDataGroup";

const GroupContext = createContext();
const { Provider } = GroupContext;
export const useGroupContext = () => useContext(GroupContext);

const Group = ({ group, getDownloadData, children, ...props }) => {
  return (
    <Provider
      value={{
        group,
        getDownloadData,
      }}
    >
      <div {...props}>
        <h3>Grupo {group.id}</h3>
        <ul>
          <li className="leader">{group.leader}</li>
          {group.members.map((member) => (
            <li className="member">{member}</li>
          ))}
        </ul>
        {children}
      </div>
    </Provider>
  );
};

Group.ButtonDownload = ButtonDownloadJsonDataGroup;
export default Group;
