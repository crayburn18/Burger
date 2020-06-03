// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: async () => {
    const result = await orm.all("burger");

    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.create("burger", cols, vals);

    return result;
  },

  update: async (objColVals, condition) => {
    const result = await orm.update("burger", objColVals, condition);

    return result;
  },
  delete: async (condition) => {
    const result = await orm.deleteOne("burger", condition);

    return result;
}
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;