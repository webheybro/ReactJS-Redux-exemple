export const wait = (duration = 1000) => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({});
    }, duration);
  });
};

export default wait;
