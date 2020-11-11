const mongoose = require("mongoose");
const db = require('../../database/config');
const UserModel = require('../../models/UserModel');

class UserRepository {
  constructor() {
    this.database();
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });
  }

  async index(query, page = 1, size = 10) {
    try {
      let users = [];
      let total = 0;
      if (query) {
        users = await UserModel.find(query)
          .skip((page - 1) * size)
          .limit(parseInt(size));
        total = await UserModel.find(query).estimatedDocumentCount();
      }
      else {
        users = await UserModel.find({})
          .skip((page - 1) * size)
          .limit(parseInt(size));
        total = await UserModel.find({}).estimatedDocumentCount();
      }
      return { users, total };
    } catch (error) {
      return { error };
    }
  }

  async getOne(userId) {
    try {
      const user = await UserModel.findOne({ userId: userId });
      return user;
    } catch (error) {
      return { error }
    }
  }

  async store(userModel) {
    try {
      const data = await UserModel.create(userModel);

      return data;
    } catch (error) {
      return { error: error };
    }
  }

  async update(userModel) {
    try {
      const { userId, name } = userModel;
      const data = await UserModel.findByIdAndUpdate({ _id: userModel._id }, { userId: userId, name: name }, { new: true });
      return data;
    } catch (error) {
      return { error: error };
    }
  }

  async remove(userModel) {
    const removed = await UserModel.findByIdAndRemove(userModel._id);
    return removed;
  }

  async exists(userId) {
    try {
      const exists = await UserModel.exists({ userId: userId });

      return exists;
    } catch (error) {
      return { error }
    }
  }
}

module.exports = new UserRepository();