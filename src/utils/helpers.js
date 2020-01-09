//error message retriver
export const retrieveMessage = err => {
  if (err.response && err.response.data && err.response.data.message) {
    return err.response.data.message;
  } else if (err.message) {
    return err.message;
  } else {
    return err;
  }
};
