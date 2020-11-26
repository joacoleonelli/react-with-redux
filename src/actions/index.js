/**
 * Using a payload object is not necessary in this case because we do not need to pass
 * data to the store.
 * We only need the information that a user has voted to increment the vote counter in the store accordingly.
 *
 */
export const voteAngular = () => {
  return {
    type: "VOTE_ANGULAR",
  };
};
export const voteReact = () => {
  return {
    type: "VOTE_REACT",
  };
};
export const voteVuejs = () => {
  return {
    type: "VOTE_VUEJS",
  };
};
