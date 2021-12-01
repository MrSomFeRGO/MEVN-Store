const boom = require("boom");

const genericCRUD = (model) => ({
  async get() {
    try {
    } catch (e) {
      throw boom.boomify(e);
    }
  },
  async getAll() {
    try {
    } catch (e) {
      throw boom.boomify(e);
    }
  },
  async create() {
    try {
    } catch (e) {
      throw boom.boomify(e);
    }
  },
  async update() {
    try {
    } catch (e) {
      throw boom.boomify(e);
    }
  },
  async delete() {
    try {
    } catch (e) {
      throw boom.boomify(e);
    }
  },
});
