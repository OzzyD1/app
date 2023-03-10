'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const developers = require("./developer-store.json");

const developersStore = {
  
  developers: developers.developers,
  
  getAllDevelopers() {
    return this.developers
  },
  
};

export default developersStore;