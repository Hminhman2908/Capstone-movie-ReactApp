export let userLocalStore = {
  get: () => {
    let dataJson = localStorage.getItem("USER");
    return JSON.parse(dataJson);
  },
  set: (user) => {
    let dataJson = JSON.stringify(user);
    return localStorage.setItem("USER", dataJson);
  },
  remove: () => {
    localStorage.removeItem("USER");
  },
};
