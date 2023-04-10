import { getRandomIndexFromArr } from "../../../shared/utils/general.utils";

const getFirstLetterFromLeaderAndMembers = (leader, members) => {
  const firstLetterFromLeader = leader[0];
  const firstLetterFromMembers = members.map((member) => member[0]);
  return [firstLetterFromLeader, ...firstLetterFromMembers]
    .join("")
    .toUpperCase();
};

export const adapterGroups = (groups) => {
  const groupsAdapter = groups.map((group, i) => {
    const leader = getRandomIndexFromArr(group);
    const members = group.filter((member) => member !== leader);
    return {
      id: `G${i + 1}-${getFirstLetterFromLeaderAndMembers(leader, members)}`,
      leader,
      members,
    };
  });

  return groupsAdapter;
};
