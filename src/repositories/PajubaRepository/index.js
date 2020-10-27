const mongoose = require("mongoose");
const db = require('../../database/config');
const PajubaModel = require('../../models/PajubaModel');

class PajubaRepository {
  constructor() {
    this.database();
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
  }

  async index(query, page = 1, size = 10) {
    try {
      let pajubas = [];
      let total = 0;
      if (query) {
        pajubas = await PajubaModel.find(query)
          .skip((page - 1) * size)
          .limit(parseInt(size));
        total = await PajubaModel.find(query).estimatedDocumentCount();
      }
      else {
        pajubas = await PajubaModel.find({})
          .skip((page - 1) * size)
          .limit(parseInt(size));
        total = await PajubaModel.find({}).estimatedDocumentCount();
      }
      return { pajubas, total };
    } catch (error) {
      return { error };
    }
  }

  async getOne(title) {
    try {
      const pajuba = await PajubaModel.findOne({ title: title })

      return pajuba;
    } catch (error) {
      return { error }
    }
  }

  async getRandom() {
    try {
      const pajuba = await PajubaModel.aggregate([{ '$sample': { size: 1 } }]);
      return pajuba[0];
    } catch (error) {
      return { error }
    }
  }

  async getTotalCount() {
    const length = PajubaModel.estimatedDocumentCount();
    return length;
  }

  async store(title, description) {
    const data = await PajubaModel.create({ title, description });

    return data;
  }

  async storeMany(docs) {
    const data = await PajubaModel.insertMany(docs);

    return data;
  }

  async update(pajuba) {

    const { title, description } = pajuba;
    const data = await PajubaModel.findByIdAndUpdate({ _id: pajuba._id }, { title: title, description: description }, { new: true });

    return data;
  }

  async remove(pajuba) {
    const removed = await PajubaModel.findByIdAndRemove(pajuba._id);
    return removed;
  }

  async getAvailableExpressions(size = 3) {
    try {
      const pajubas = await PajubaModel.aggregate([{ '$sample': { size: parseInt(size) } }, { '$project': { title: 1, _id: 0 } }]);
      const expressionsTitle = pajubas.map(item => item.title);
      return expressionsTitle;
    } catch (error) {
      return { error };
    }
  }

  async dailyPajuba() {
    try {
      const pajubaIds = await PajubaModel.find({}, { _id: 1 });

      const today = new Date();

      const index = (today.getFullYear() + today.getMonth() + today.getDate()) % pajubaIds.length;

      const pajuba = await PajubaModel.findById(pajubaIds[index]);

      return pajuba;
    } catch (error) {
      console.log(error)
      return { error };
    }
  }

  async exists(title) {
    try {
      const exists = await PajubaModel.exists({ title: title });

      return exists;
    } catch (error) {
      return { error }
    }
  }
}

module.exports = new PajubaRepository();