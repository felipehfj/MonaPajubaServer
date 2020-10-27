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

  async index(query, page = 1, size = 10) {
    try {
      let audits = [];
      let total = 0;
      if (query) {
        audits = await AuditModel.find(query)
          .skip((page - 1) * size)
          .limit(parseInt(size));
        total = await AuditModel.find(query).estimatedDocumentCount();
      }
      else {
        audits = await AuditModel.find({})
          .skip((page - 1) * size)
          .limit(parseInt(size));
        total = await AuditModel.find({}).estimatedDocumentCount();
      }
      return { audits, total };
    } catch (error) {      
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