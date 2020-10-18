const AuditRepository = require("../../../repositories/AuditRepository");

class AuditController {  
  async index(req, res) {
    try {
      const audits = await AuditRepository.index();

      return res.json(audits);
    } catch (error) {
      res.boom.badRequest(error)
    }
  } 
}

module.exports = new AuditController();