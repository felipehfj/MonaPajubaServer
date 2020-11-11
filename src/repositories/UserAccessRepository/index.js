const mongoose = require("mongoose");
const db = require('../../database/config');
const UserAccessModel = require('../../models/UserAccessModel');

class UserAccessRepository {
  constructor() {
    this.database();
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
  }

  async index(query, page = 1, size = 10) {
    try {
      let users = [];
      let total = 0;
      if (query) {
        users = await UserAccessModel.find(query)
          .skip((page - 1) * size)
          .limit(parseInt(size));
        total = await UserAccessModel.find(query).estimatedDocumentCount();
      }
      else {
        users = await UserAccessModel.find({})
          .skip((page - 1) * size)
          .limit(parseInt(size));
        total = await UserAccessModel.find({}).estimatedDocumentCount();
      }
      return { users, total };
    } catch (error) {
      return { error };
    }
  }

  async getOne(userId) {
    try {
      const user = await UserAccessModel.findOne({ userId: userId })

      return user;
    } catch (error) {
      return { error }
    }
  }  

  async store(userModel) {   
    const data = await UserAccessModel.create(userModel);

    return data;
  }

  async update(userModel) {

    const { title, description } = pajuba;
    const data = await UserAccessModel.findByIdAndUpdate({ _id: pajuba._id }, { title: title, description: description }, { new: true });

    return data;
  }

  async remove(userId) {    
    const removed = await UserAccessModel.findOneAndDelete({userId: userId});
    return removed;
  }  

  async exists(userId) {
    try {
      const exists = await UserAccessModel.exists({ userId: userId });

      return exists;
    } catch (error) {
      return { error }
    }
  }
}

module.exports = new UserAccessRepository();