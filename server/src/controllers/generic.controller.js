const boom = require("boom");

const genericCRUD = (model) => ({
  async get({ params: { id } }, res) {
    try {
      const item = await model.findById(id);
      return res.send(item);
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async getAll(req, res) {
    try {
      const items = await model.find();
      return res.send(items);
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async create({ body }, res) {
    try {
      const item = new model(body);
      const newItem = await item.save();
      return res.send(newItem);
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async update({ params: { id }, body }, res) {
    try {
      const item = await model.findByIdAndUpdate(id, body, { new: true });
      return res.send(item);
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
  async delete({ params: { id } }, res) {
    try {
      await model.findByIdAndDelete(id);
      return res.send({ status: "OK", message: "Продукт удалён" });
    } catch (e) {
      return res.status(400).send(boom.boomify(e));
    }
  },
});

module.exports = genericCRUD;
