const mongoose = require("mongoose");
const db = require('../../database/config');
const AuditModel = require('../../models/AuditModel');

class PajubaRepository {
  constructor() {
    this.database();
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
  }

  async index(query) {
    try {
      let audits = [];
      if (query)
        audits = await AuditModel.find(query);
      else
        audits = await AuditModel.find({});

      return audits;
    } catch (error) {
      console.log(error)
      return { error };
    }
  }

  async store(event, description) {
    try {
      const audit = await AuditModel.create({ event: event, description: description });

      return audit;
    } catch (error) {
      return { error };
    }
  }

  async exists(id) {
    try {
      const exists = await AuditModel.exists({ _id: id });

      return exists;
    } catch (error) {
      return { error };
    }
  }
}

module.exports = new PajubaRepository();