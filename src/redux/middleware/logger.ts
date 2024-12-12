const Logger = (state) => (next) => (action) => {
  console.log("Current state =>", state.getState());
  console.log("Current state =>", action);
  next(action);
  console.log("Current state =>", action);
};

export default Logger;
