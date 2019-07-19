const types = {
  USER: {
    index: 1,
    description: "USUARIO",
    app: "APP"
  },

  ADMIN: {
    index: 2,
    description: "ADMIN",
    app: "ADMIN"
  },
  DEV: {
    index: 3,
    description: "DEV"
  }
};

const getArray = () => {
  return Object.keys(types).map(key => types[key]);
};

const getByIndex = index => {
  return getArray().filter(t => t.index == index);
};

const getByApp = app => {
  return getArray().filter(t => app === t.app);
};

Object.freeze(types);

export default { types, getByIndex, getArray, getByApp };
