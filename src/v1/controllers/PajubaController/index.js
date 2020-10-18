const PajubaRepository = require("../../../repositories/PajubaRepository");
const AuditRepository = require("../../../repositories/AuditRepository");

class PajubaController {
  constructor() {

  }

  async index(req, res) {
    try {
      const pajubas = await PajubaRepository.index();
      await AuditRepository.store('index', 'list all pajubas');
      return res.json(pajubas);
    } catch (error) {
      res.boom.badRequest(error)
    }
  }

  async getOne(req, res) {
    try {
      const { title } = req.params;
      const pajuba = await PajubaRepository.getOne(title);
      if(pajuba){
        await AuditRepository.store('getOne', title);
        return res.json(pajuba);
      }else{
        res.boom.notFound(title);
      }      
    } catch (error) {
      res.boom.badRequest(error)
    }
  }

  async getDaily(req, res) {
    try {
      const pajuba = await PajubaRepository.dailyPajuba();
      await AuditRepository.store('getDaily', pajuba.title);
      return res.json(pajuba);
    } catch (error) {
      res.boom.badRequest(error)
    }
  }

  async getAvailable(req, res) {
    try {

      const size = req.query.size ? req.query.size : 3;
      const pajubas = await PajubaRepository.getAvailableExpressions(size);
      
      await AuditRepository.store('getAvailable', pajubas.join(', '));

      return res.json(pajubas);
    } catch (error) {
      res.boom.badRequest(error)
    }
  }

  async getRandom(req, res) {
    try {
      const pajuba = await PajubaRepository.getRandom();

      await AuditRepository.store('getRandom', pajuba.title);
      return res.json(pajuba);
    } catch (error) {
      res.boom.badRequest(error)
    }
  }

  async getCountExpression(req, res) {
    try {
      const count = await PajubaRepository.getTotalCount();
      await AuditRepository.store('getCountExpression', count);
      return res.json({total: count});
    } catch (error) {
      res.boom.badRequest(error)
    }
  }

  async store(req, res) {
    try {
      const { title, description } = req.body;

      if (PajubaRepository.exists(title)) {
        return res.boom.badRequest("Record already exists")
      }

      const pajuba = await PajubaRepository.store(title, description);
      await AuditRepository.store('store', pajuba.title);

      return res.status(201).json(pajuba);

    } catch (error) {
      res.boom.badRequest(error)
    }
  }

  async update(req, res) {
    try {
      const { title, description } = req.body;

      if (!PajubaRepository.exists(title)) {
        return res.boom.notFound()
      }

      let updated = await PajubaRepository.getOne(title);

      updated.description = description;

      const pajuba = await PajubaRepository.update(updated);
      await AuditRepository.store('update', pajuba.title);

      return res.status(200).json(pajuba);

    } catch (error) {
      res.boom.badRequest(error)
    }
  }

  async remove(req, res) {
    try {
      const { title } = req.params;

      if (!PajubaRepository.exists(title)) {
        return res.boom.notFound()
      }

      const pajuba = await PajubaRepository.getOne(title);
      
      const removed = await PajubaRepository.remove(pajuba);
      await AuditRepository.store('update', removed.title);

      return res.send(removed);
      
    } catch (error) {
      res.boom.badRequest(error)
    }
  }
}

module.exports = new PajubaController();