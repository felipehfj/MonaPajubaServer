const AuditRepository = require("../../../repositories/AuditRepository");

class AuditController {  
  async index(req, res) {
    try {
      const {page,size} = req.query;            
      const {audits, total} = await AuditRepository.index({}, page, size);      
      res.header('X-Total-Count', total);
      return res.json(audits);
    } catch (error) {
      res.boom.badRequest(error)
    }
  } 
}

module.exports = new AuditController();